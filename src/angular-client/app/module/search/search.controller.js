(function () {
    'use strict';

    angular
        .module('app')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['UserService', '$rootScope'];
    function SearchController(UserService, $rootScope) {
        var vm = this;

    }

})();