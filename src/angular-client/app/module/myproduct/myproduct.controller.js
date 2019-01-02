(function () {
    'use strict';

    angular
        .module('app')
        .controller('MyProductController', MyProductController);

    MyProductController.$inject = ['ProductService', '$rootScope'];
    function MyProductController(ProductService, $rootScope) {
        var vm = this;

    }

})();