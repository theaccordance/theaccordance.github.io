define(function() {
    "use strict";

    function AppConfig($urlRouterProvider) {
        $urlRouterProvider.when('', '/login');
    }

    return ['$urlRouterProvider', AppConfig];
});