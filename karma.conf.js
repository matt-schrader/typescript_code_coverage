module.exports = function(config) {
    config.set({
        basePath: 'build-test/',

        frameworks: ['jasmine'],
        preprocessors: {
            'bundle.js': ['coverage']
        },
        reporters: ['progress', 'coverage'],

        files: [
            {pattern: 'bundle.js', watched: false}
        ],

        webpackMiddleware: {
          noInfo: true
        },

        webpackServer: {
            noInfo: true
        },

        exclude: [],

        coverageReporter: {
          instrumenterOptions: {
            istanbul: {noCompact: true}
          },
          dir: 'coverage/',
          reporters: [
            { type: 'json', subdir: '.', file: 'coverage-final.json' }
          ]
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
