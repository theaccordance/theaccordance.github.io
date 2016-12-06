define([
    'angular',
    'lib/angular-ui-router',
    'lib/angular-animate.min',
    './templates.cache'
], function (angular) {
    "use strict";
    return angular.module('jm.core', ['ui.router', 'ngAnimate', 'jm.templates'])
        .run(function () {
            window.console.log('jm.core launched.');
        });
});