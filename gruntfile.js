module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.initConfig({
        assemble: {
            options: {
                layout: 'index.hbs',
                layoutdir: 'layouts'
            }
        },
        connect: {
            template: {
                options: {
                    hostname: 'localhost',
                    port: '1413',
                    base: 'template',
                    keepalive: true
                }
            }
        },
        'gh-pages': {
            options: {
                base: 'template/landing'
            },
            src: ['**/*']
        }
    });

    grunt.registerTask('start', ['connect']);
};