(function () {
    'use strict';

    function LoginController($location, auth) {
        var vm = this;

        vm.login = function (user, loginForm) {
            if (loginForm.$valid) {
                console.log('...Trying to login user...');
                auth.login(user)
                    .then(function () {
                        console.log('...User logged in...');
                        $location.path('/');
                    });
            }
        }
    }

    angular.module('catApp.controllers')
        .controller('LoginController', ['$location', 'auth', LoginController]);
}());