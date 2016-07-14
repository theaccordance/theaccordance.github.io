module.exports = function (grunt) {
    return {
        project: {
            options: {
                base: 'preview',
                branch: 'master'
            },
            src: '**/*'
        }
    };
};
