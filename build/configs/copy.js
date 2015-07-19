module.exports = {
    landing: {
        files: [
            {expand: true, src: ['CNAME'], dest: 'dist/', filter: 'isFile'},
            {expand: true, cwd: 'template/landing/', src: ['**'], dest: 'dist/', filter: 'isFile'},
            {expand: true, flatten: true, src: ['source/images/logo.svg'], dest: 'dist/img/', filter: 'isFile'}
        ]
    }
};