define(function() {
    "use strict";
    function ProfileStates($stateProvider) {
        $stateProvider.state('profile', {
            url: '/profile',
            component: 'profile'
        });
    }

    return ['$stateProvider', ProfileStates];
});