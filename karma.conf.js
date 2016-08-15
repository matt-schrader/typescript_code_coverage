module.exports = function(config) {
    config.set({
        basePath: '.',

        frameworks: ['jasmine'],

        files: [
            {pattern: 'spec.bundle.ts', watched: false},
            {pattern: 'build/bundle.js', included: false, watched: true},
        ],

        preprocessors: {
            'spec.bundle.ts': ['webpack'],
            'build/bundle.js' : ['coverage']
        },

        webpack: {
            output: {
                filename: 'test.js',
                path: 'tmp'
            },
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
                        test: /^((?!\.spec\.ts).)*.ts$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'istanbul-instrumenter'
                    }
                ]
            }
        },

        webpackServer: {
            noInfo: true
        },

        exclude: [],

        reporters: ['progress', 'dots', 'coverage'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        browsers: [
            'Chrome'
        ],

        coverageReporter: {
                type: 'html',
                dir: 'coverage/'
        },

        singleRun: false
    });
};
