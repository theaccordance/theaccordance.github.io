define([
    'angular',
    './app.config',
    '../core/core.module',
    '../common/common.module',
    '../login/login.module',
    '../profile/profile.module',
    '../walkthrough/walkthrough.module'
], function (angular, config) {
    "use strict";
    return angular.module('jm', [
        'jm.core',
        'jm.common',
        'jm.login',
        'jm.profile',
        'jm.walkthrough'
    ])
        .config(config)
        .run(function () {
            window.console.log('jm launched.');
        });
});