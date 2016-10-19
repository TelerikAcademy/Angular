(function(){
    'use strict';

    function trips(data) {
        var TRIPS_URL = 'api/trips';

        function getPublicTrips() {
            return data.get(TRIPS_URL);
        }

        function filterTrips(filters) {
            return data.get(TRIPS_URL, filters);
        }

        function createTrip(trip) {
            return data.post(TRIPS_URL, trip);
        }

        return {
            getPublicTrips: getPublicTrips,
            createTrip: createTrip,
            filterTrips: filterTrips
        }
    }

    angular.module('myApp.services')
        .factory('trips', ['data', trips])
}());