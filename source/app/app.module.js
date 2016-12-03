define([
    'angular',
    '../login/login.module',
    '../profile/profile.module',
    '../walkthrough/walkthrough.module'
], function (angular) {
    "use strict";
    return angular.module('jm', [
        'ui.router',
        'jm.login',
        'jm.profile',
        'jm.walkthrough'
    ])
        .run(function () {
            window.console.log('jm launched.');
        });
});