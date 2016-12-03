define([
    'angular',
    './app.config',
    '../login/login.module',
    '../profile/profile.module',
    '../walkthrough/walkthrough.module'
], function (angular, config) {
    "use strict";
    return angular.module('jm', [
        'ui.router',
        'jm.login',
        'jm.profile',
        'jm.walkthrough'
    ])
        .config(config)
        .run(function () {
            window.console.log('jm launched.');
        });
});