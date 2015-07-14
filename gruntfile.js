module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        connect: {
            template: {
                options: {
                    hostname: 'localhost',
                    port: '1413',
                    base: 'template',
                    keepalive: true
                }
            }
        }
    });

    grunt.registerTask('start', ['connect']);
};