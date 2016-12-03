define([
    'angular'
], function (angular) {
    "use strict";
    return angular.module('jm.walkthrough', [])
        .run(function () {
            window.console.log('jm.walkthrough launched.');
        });
});