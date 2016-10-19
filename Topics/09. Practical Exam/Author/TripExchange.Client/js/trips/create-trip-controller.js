(function () {
    'use strict';

    function CreateTripController($location, cities, trips) {
        var vm = this;

        cities.getAll()
            .then(function (allCities) {
                vm.cities = allCities;
            });

        vm.createTrip = function (newTrip) {
            trips.createTrip(newTrip)
                .then(function (createdTrip) {
                    $location.path('/trips/details/' + createdTrip.id);
                });
        }
    }

    angular.module('myApp.controllers')
        .controller('CreateTripController', ['$location', 'cities', 'trips', CreateTripController]);
}());