define([
    'angular'
], function (angular) {
    "use strict";
    return angular.module('jm.profile', [])
        .run(function () {
            window.console.log('jm.profile launched.');
        });
});