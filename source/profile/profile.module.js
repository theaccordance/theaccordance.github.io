define([
    'angular',
    './profile.states',
    '../core/core.module'
], function (angular, states) {
    "use strict";
    return angular.module('jm.profile', ['jm.core'])
        .config(states)
        .run(function () {
            window.console.log('jm.profile launched.');
        });
});