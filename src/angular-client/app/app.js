(function () {
    'use strict';

var $routeProviderReference;

var $ocLazyLoadProviderReference;
 
var $configUrl =  "./app/data/config.json";

    var app = angular
        .module('app', ['ngRoute', 'ngCookies', 'oc.lazyLoad'])
        .factory('getjson', function($http) {
        
            var getData = function(url) {
                
                return $http.get(url).
                then(function (response) {
        
                    //if (response.data.Success)
                        return JSON.parse(JSON.stringify(response.data));
        
                      //  alert(response.data);
                    }, function(response) {
                  // called asynchronously if an error occurs
                  // or server returns response with an error status.
                  alert("Hata!"+response.data);
                });
            };
            return { getData: getData };
        })
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider', '$ocLazyLoadProvider'];
    function config($routeProvider, $locationProvider, $ocLazyLoadProvider) {

        $routeProvider.when('/login', {
                    templateUrl: 'app/module/login/login.view.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                })
                    .when('/register', {
                    templateUrl: 'app/module/register/register.view.html',
                    controller: 'RegisterController',
                    controllerAs: 'vm'
                })
                    .when('/logout', {
                    templateUrl: 'app/module/logout/logout.view.html',
                    controller: 'LogoutController',
                    controllerAs: 'vm'
                })
                ;  // .when('/load', ( window.location.href = './index.html' ) );

        $routeProviderReference = $routeProvider;      

        $ocLazyLoadProvider.config({
             'debug': false, // For debugging 'true/false'
             'events': true, // For Event 'true/false'  
             'modules': []
         });
    }

    run.$inject = ['$rootScope', '$location', '$cookies', '$http', '$route', 'getjson', '$q'];
    function run($rootScope, $location, $cookies, $http, $route, getjson, $q) {                

        $rootScope.config = undefined;

        $rootScope.navSelected = 0;

        $rootScope.contentTitle = '';

        $rootScope.navSelect= function(index, itemValue, xValue) {
           $rootScope.navSelected = index; 
           
           if (xValue === undefined) {
                  $rootScope.contentTitle = itemValue;
            }
            else {
                $rootScope.contentTitle = itemValue + '  >  ' + xValue;
            };

        };

        $rootScope.setNav = function() {
            $rootScope.navSelected = 0;
            $rootScope.contentTitle = '';        
        };

        // keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) { 
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
            
            var myDataPromise1 = getjson.getData($configUrl);  // http://localhost:5000/api/config  // bu kısım authservice ne alınacak
            myDataPromise1.then(function (result) {
                $rootScope.config = result;
                setRoute(result.root.route); 
            });       
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });

      
        function setRoute(data) {
    
            var j = 0, currentRoute;

            var def = data.default;

            var controllers = [];

            for ( ; j < data.routes.length; j++ ) {
        
                currentRoute = data.routes[j];

                controllers.push(currentRoute.controllerUrl);

                $routeProviderReference.when(currentRoute.name, {

                    templateUrl: currentRoute.templateUrl,
                    controller: currentRoute.controller,
                    controllerAs: currentRoute.controllerAs,
                    resolve: {
                        loadController: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load(controllers); // Resolve promise and load before view 
                        }]
                    }
                });
            };

            $routeProviderReference.otherwise({ redirectTo: def });

            $route.reload();
        };
    }

})();