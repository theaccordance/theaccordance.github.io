define(function() {
    "use strict";
    function WalkthroughStates($stateProvider) {
        $stateProvider.state('walkthrough', {
            url: '/walkthrough',
            component: 'walkthrough'
        });
    }

    return ['$stateProvider', WalkthroughStates];
});