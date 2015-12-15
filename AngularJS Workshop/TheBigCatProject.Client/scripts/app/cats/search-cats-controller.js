(function () {
    'use strict';

    function SearchCatsController(cats) {
        var vm = this;
        vm.currentPage = 1;

        cats.searchCats()
            .then(function (initialCats) {
                vm.cats = initialCats;
            });

        vm.search = function (request, page) {
            request = request || {};
            request.page = page;

            vm.currentPage = page;

            cats.searchCats(request)
                .then(function (filteredCats) {
                    vm.cats = filteredCats;
                });
        }
    }

    angular.module('catApp.controllers')
        .controller('SearchCatsController', ['cats', SearchCatsController]);
}());