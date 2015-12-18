(function () {
    'use strict';

    function drivers(data) {
        function getPublicDrivers() {
            return data.get('api/drivers');
        }

        return {
            getPublicDrivers: getPublicDrivers
        }
    }

    angular.module('myApp.services')
        .factory('drivers', ['data', drivers])
}());