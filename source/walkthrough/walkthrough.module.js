define([
    'angular',
    './walkthrough.states',
    '../core/core.module'
], function (angular, states) {
    "use strict";
    return angular.module('jm.walkthrough', ['jm.core'])
        .config(states)
        .run(function () {
            window.console.log('jm.walkthrough launched.');
        });
});