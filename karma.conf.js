module.exports = function(config) {
    config.set({
        basePath: '.',

        frameworks: ['jasmine'],
        preprocessors: {
            'build-test/bundle.js': ['coverage']
        },
        reporters: ['progress', 'coverage'],

        files: [
            {pattern: 'build-test/bundle.js', watched: false}
        ],

        webpackMiddleware: {
          noInfo: true
        },

        webpackServer: {
            noInfo: true
        },

        exclude: [],

        coverageReporter: {
          type : 'json',
          dir: 'coverage',
          subdir: '.',
          file: 'coverage-final.json'
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        browsers: [
            'Chrome'
        ],

        singleRun: false
    });
};
