(function () {
    'use strict';

    function MyCtrl2($scope) {

    }

    angular.module('myApp.controllers')
        .controller('MyCtrl2', ['$scope', MyCtrl2]);
}());