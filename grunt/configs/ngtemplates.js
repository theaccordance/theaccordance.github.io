module.exports = function (grunt) {
    "use strict";
    return {
        "hgMobile.templates": {
            cwd: 'source',
            src: ['**/*.html', '!index.html'],
            dest: 'preview/core/templates.cache.js',
            options: {
                bootstrap: function (module, script) {
                    return "define(['angular'], function (angular) { 'use strict'; return angular.module('jm.templates', []).run(['$templateCache', function ($templateCache) {" + script + "}]);});";
                }
            }
        }
    };
};




