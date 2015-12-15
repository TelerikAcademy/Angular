(function () {
    'use strict';

    function HomeController(cats) {
        var vm = this;

        cats.searchCats({ page: 1 })
            .then(function (initialCats) {
                vm.cats = initialCats;
            });
    }

    angular.module('catApp.controllers')
        .controller('HomeController', ['cats', HomeController]);
}());