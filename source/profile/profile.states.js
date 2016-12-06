define(function() {
    "use strict";
    function ProfileStates($stateProvider) {
        $stateProvider.state('profile', {
            url: '/profile',
            template: '<profile></profile>'
        });
    }

    return ['$stateProvider', ProfileStates];
});