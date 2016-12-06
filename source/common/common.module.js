define([
    'angular',
    './sidemenu/sidemenu.component'
], function (angular, sidemenu) {
    "use strict";
    return angular.module('jm.common', [])
        .component('sidemenu', sidemenu)
        .run(function () {
            window.console.log('jm.common launched.');
        });
});