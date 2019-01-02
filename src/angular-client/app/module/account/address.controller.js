(function () {
    'use strict';

    angular
        .module('app')
        .controller('AddressController', AddressController);

	AddressController.$inject = ['UserService', '$rootScope'];
    function AddressController(UserService, $rootScope) {
        var vm = this;

        vm.address = null;
        vm.allAddress = [];
        vm.deleteAddress = deleteAddress;

        //initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function addAddress() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteAddress(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }
    }

})();