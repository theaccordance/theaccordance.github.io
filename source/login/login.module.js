define([
    'angular',
    './login.states',
    '../core/core.module'
], function (angular, states) {
    "use strict";
    return angular.module('jm.login', ['jm.core'])
        .config(states)
        .run(function () {
            window.console.log('jm.login launched.');
        });
});