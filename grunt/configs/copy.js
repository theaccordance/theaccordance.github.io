module.exports = function (grunt) {
    return {
        project: {
            files: [
                {expand: true, cwd: 'bower_components/angular/', src: ['angular.min.js'], dest: 'preview/lib/', filter: 'isFile'},
                {expand: true, cwd: 'bower_components/angular-animate/', src: ['angular-animate.min.js'], dest: 'preview/lib/', filter: 'isFile'},
                {expand: true, cwd: 'bower_components/Ionicons/fonts', src: ['*'], dest: 'preview/fonts/', filter: 'isFile'},
                {expand: true, cwd: 'bower_components/ui-router/build_packages/ng1/release/', src: ['angular-ui-router.min.js'], dest: 'preview/lib/', filter: 'isFile'},
                {expand: true, cwd: 'bower_components/requirejs/', src: ['require.js'], dest: 'preview/lib/', filter: 'isFile'},
                {expand: true, cwd: 'source/', src: ['**/*.js'], dest: 'preview/', filter: 'isFile'},
                {expand: true, cwd: 'source/', src: ['index.html'], dest: 'preview/', filter: 'isFile'}
            ]
        }
    };
};
