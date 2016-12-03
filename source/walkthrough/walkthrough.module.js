define([
    'angular',
    './walkthrough.states'
], function (angular, states) {
    "use strict";
    return angular.module('jm.walkthrough', [])
        .config(states)
        .run(function () {
            window.console.log('jm.walkthrough launched.');
        });
});