define(function () {
    "use strict";

    function MenuController() {
        var vm = this;

        function onInit() {
            window.console.log('menu init');
        }

        vm.$onInit = onInit;
    }

    return MenuController;
});