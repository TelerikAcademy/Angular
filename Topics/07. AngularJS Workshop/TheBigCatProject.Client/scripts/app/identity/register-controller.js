(function () {
    'use strict';

    function RegisterController($location, auth) {
        var vm = this;

        vm.register = function (user, registerForm) {
            if (registerForm.$valid) {
                console.log('...Registering user...');
                auth.register(user)
                    .then(function () {
                        console.log('...User registered...');
                        $location.path('/identity/login');
                    });
            }
        }
    }

    angular.module('catApp.controllers')
        .controller('RegisterController', ['$location', 'auth', RegisterController]);
}());