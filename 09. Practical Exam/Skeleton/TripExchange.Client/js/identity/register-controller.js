(function () {
    'use strict';

    function RegisterController($scope, $location, auth, notifier) {
        $scope.signup = function (user) {
            auth.signup(user).then(function () {
                notifier.success('Registration successful!');
                $location.path('/');
            })
        }
    }

    angular.module('myApp.controllers').controller('SignUpCtrl', ['$scope', '$location', 'auth', 'notifier', RegisterController]);
}());