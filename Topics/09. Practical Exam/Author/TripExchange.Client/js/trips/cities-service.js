(function() {
    'use strict';

    function cities(data) {
        function getAll() {
            return data.get('api/cities');
        }

        return {
            getAll: getAll
        }
    }

    angular.module('myApp.services')
        .factory('cities', ['data', cities])
}());