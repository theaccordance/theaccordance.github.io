/*jslint maxlen: 140 */
require.config({
    paths: {
        'angular': 'lib/angular.min'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'lib/angular-ui-router' : { deps: ['angular']},
        'lib/angular-animate.min' : { deps: ['angular']}
    },
    priority : [
        'angular'
    ]
});

require([
    'angular',
    './app/app.module'
], function (angular) {
    "use strict";
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['jm']);
    });
});