(function () {
    'use strict';

    function MyCtrl1($scope, notifier) {
        notifier.success('Partial 1!');
        notifier.error('Partial 1');
    }

    angular.module('myApp.controllers')
        .controller('MyCtrl1', ['$scope', 'notifier', MyCtrl1]);
}());