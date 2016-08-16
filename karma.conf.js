module.exports = function(config) {
    config.set({
        basePath: '.',

        frameworks: ['jasmine'],
        preprocessors: {
            'spec.bundle.ts': ['webpack', 'sourcemap']
        },
        reporters: ['progress', 'coverage'],

        files: [
            {pattern: 'spec.bundle.ts', watched: false}
        ],

        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                extensions: ['', '.js', '.ts']
            },
            module: {
                loaders: [
                    {test: /\.ts$/, loader: 'ts'},
                ],
                postLoaders: [
                    {
                        test: /\.ts$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'istanbul-instrumenter'
                    }
                ]
            }
        },

        webpackMiddleware: {
          noInfo: true
        },

        webpackServer: {
            noInfo: true
        },

        exclude: [],

        coverageReporter: {
          type : 'html',
          dir: 'coverage',
          subdir: '.'
        },

        remapIstanbulReporter: {
          coverage: 'coverage/coverage-final.json',
          reports: {
            lcovonly: 'path/to/output/coverage/lcov.info',
            html: 'path/to/output/html/report'
          }
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
