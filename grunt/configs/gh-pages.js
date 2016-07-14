module.exports = function (grunt) {
    return {
        project: {
            options: {
                base: 'preview',
                branch: 'gh-pages'
            },
            src: '**/*'
        }
    };
};
