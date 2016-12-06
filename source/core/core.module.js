define([
    'angular',
    'lib/angular-ui-router',
    './templates.cache'
], function (angular) {
    "use strict";
    return angular.module('jm.core', ['ui.router', 'jm.templates'])
        .run(function () {
            window.console.log('jm.core launched.');
        });
});