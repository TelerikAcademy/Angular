(function () {
    'use strict';

    function TripsController(trips, cities, identity) {
        var vm = this;
        vm.identity = identity;
        vm.request = {
            page: 1
        };

        vm.prevPage = function () {
            if (vm.request.page == 1) {
                return;
            }

            vm.request.page--;
            vm.filterTrips();
        }

        vm.nextPage = function () {
            if (!vm.trips || vm.trips.length == 0) {
                return;
            }

            vm.request.page++;
            vm.filterTrips();
        }

        vm.filterTrips = function () {
            trips.filterTrips(vm.request)
                .then(function (filteredTrips) {
                    vm.trips = filteredTrips;
                });
        }

        trips.getPublicTrips()
            .then(function (publicTrips) { 
                vm.trips = publicTrips;
            });

        cities.getAll()
            .then(function (allCities) {
                vm.cities = allCities;
            });
    }

    angular.module('myApp.controllers')
        .controller('TripsController', ['trips', 'cities', 'identity', TripsController]);
}());