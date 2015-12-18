(function () { 
    'use strict';

    function TripDetailsController($routeParams) {
        var vm = this;
        vm.id = $routeParams.id; // $routeParams['id']
        vm.name = $routeParams.name;
    }

    angular.module('myApp.controllers')
        .controller('TripDetailsController', ['$routeParams', TripDetailsController])
}());