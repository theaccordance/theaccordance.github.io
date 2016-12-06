define(function () {
    "use strict";

    function MenuController() {
        var vm = this;

        function onInit() {
            window.console.log('menu init');
        }

        function open() {
            window.console.log('open');
            vm.sidemenu = !vm.sidemenu;
        }

        vm.$onInit = onInit;
        vm.open = open;
        vm.sidemenu = false;
    }

    return MenuController;
});