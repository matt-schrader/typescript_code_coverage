module.exports = function(config) {
    config.set({
        basePath: '.',

        frameworks: ['jasmine'],
        preprocessors: {
            'build/bundle.js': ['coverage']
        },
        reporters: ['progress', 'coverage'],

        files: [
            {pattern: 'build/bundle.js', watched: false}
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
