module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json'),
        tasks = pkg.devDependencies,
        config = {},
        fileName,
        fileData;

    for ( var task in tasks ) {
        grunt.loadNpmTasks(task);
    }

    grunt.file.expand('build/configs/**/*.js').forEach(function(filePath) {
        fileName = filePath.split('/').pop().split('.')[0];
        fileData = require('./' + filePath);
        config[fileName] = fileData;
    });

    grunt.initConfig(config);
};