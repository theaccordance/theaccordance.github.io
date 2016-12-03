define([
    'angular'
], function (angular) {
    "use strict";
    return angular.module('jm.login', [])
        .run(function () {
            window.console.log('jm.login launched.');
        });
});