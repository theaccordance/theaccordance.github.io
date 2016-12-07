define(function () {
    "use strict";

    function MenuController($state, $timeout) {
        var vm = this;

        function onInit() {
            window.console.log('menu init');
        }

        function open() {
            vm.sidemenu = !vm.sidemenu;
        }

        function navigate() {
            var dest = $state.is('login') ? 'profile' : 'login';
            vm.sidemenu = !vm.sidemenu;

            $state.go(dest);

        }

        vm.$onInit = onInit;
        vm.navigate = navigate;
        vm.open = open;
        vm.sidemenu = false;
    }

    return ['$state', '$timeout', MenuController];
});