define([
    'angular',
    './login.states'
], function (angular, states) {
    "use strict";
    return angular.module('jm.login', [])
        .config(states)
        .run(function () {
            window.console.log('jm.login launched.');
        });
});