define([
    'angular',
    'lib/angular-ui-router'
], function (angular) {
    "use strict";
    return angular.module('jm.core', ['ui.router'])
        .run(function () {
            window.console.log('jm.core launched.');
        });
});