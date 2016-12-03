define([
    'angular',
    './profile.states'
], function (angular, states) {
    "use strict";
    return angular.module('jm.profile', [])
        .config(states)
        .run(function () {
            window.console.log('jm.profile launched.');
        });
});