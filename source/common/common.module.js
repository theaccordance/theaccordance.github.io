define([
    'angular',
    './menu/menu.component'
], function (angular, menu) {
    "use strict";
    return angular.module('jm.common', [])
        .component('menu', menu)
        .run(function () {
            window.console.log('jm.common launched.');
        });
});