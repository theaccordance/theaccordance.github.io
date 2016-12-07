define(function() {
    "use strict";
    function LoginStates($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            template: '<login></login>'
        });
    }

    return ['$stateProvider', LoginStates];
});