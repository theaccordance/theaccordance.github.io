define(function() {
    "use strict";

    function AppConfig($urlRouterProvider) {
        $urlRouterProvider.when('', '/profile');
    }

    return ['$urlRouterProvider', AppConfig];
});