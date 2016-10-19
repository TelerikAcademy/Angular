(function () {
    'use strict';

    function HomeController(statistics, trips, drivers) {
        var vm = this;

        statistics.getStats()
            .then(function (stats) {
                vm.stats = stats;
            });

        trips.getPublicTrips()
            .then(function (publicTrips) {
                vm.trips = publicTrips;
            });

        drivers.getPublicDrivers()
            .then(function (publicDrivers) {
                vm.publicDrivers = publicDrivers;
            });
    }

    angular.module('myApp.controllers')
        .controller('HomeController', ['statistics', 'trips', 'drivers', HomeController])
}());