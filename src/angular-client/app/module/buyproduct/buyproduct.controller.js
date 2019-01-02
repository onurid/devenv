(function () {
    'use strict';

    angular
        .module('app')
        .controller('BuyProductController', BuyProductController);

    BuyProductController.$inject = ['ProductService', '$rootScope'];
    function BuyProductController(ProductService, $rootScope) {
        var vm = this;

    }

})();