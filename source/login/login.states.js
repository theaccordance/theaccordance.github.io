define(function() {
    "use strict";
    function LoginStates($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            component: 'login'
        });
    }

    return ['$stateProvider', LoginStates];
});