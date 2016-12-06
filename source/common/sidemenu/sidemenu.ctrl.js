define(function () {
    "use strict";

    function MenuController($state, $timeout) {
        var vm = this;

        function onInit() {
            window.console.log('menu init');
        }

        function open() {
            window.console.log('open');
            vm.sidemenu = !vm.sidemenu;
        }

        function navigate() {
            var dest = $state.is('login') ? 'profile' : 'login';
            window.console.log('nav');
            vm.sidemenu = !vm.sidemenu;

            $timeout(function() {
                $state.go(dest);
            }, 500);

        }

        vm.$onInit = onInit;
        vm.navigate = navigate;
        vm.open = open;
        vm.sidemenu = false;
    }

    return ['$state', '$timeout', MenuController];
});