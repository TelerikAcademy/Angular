(function () {
    'use strict';

    function AddCatController($location, cats) {
        var vm = this;

        vm.addCat = function (cat, catForm) {
            if (catForm.$valid) {
                cats.addCat(cat)
                    .then(function (catId) {
                        $location.path('/cats/details/' + catId);
                    });
            }
        }
    }

    angular.module('catApp.controllers')
        .controller('AddCatController', ['$location', 'cats', AddCatController])
}());