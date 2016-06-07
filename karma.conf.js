var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '.',
    // Add any browsers here
    browsers: ['Chrome'],
    frameworks: ['jasmine'],

    // The entry point for our test suite
    //basePath: 'src',
    autoWatch: false,
    files: ['spec.bundle.ts'],
    preprocessors: {
      // Run this through webpack, and enable inline sourcemaps
      'spec.bundle.ts': ['webpack', 'sourcemap'],
      '!(*spec)+(.ts)': ['sourcemap', 'coverage'],
      '!(*spec)+(.js)': ['sourcemap', 'coverage']
    },

    webpack: webpackConfig.test,
    client: {
      // log console output in our test console
      captureConsole: true
    },

    reporters: ['dots', 'progress', 'coverage'],
    singleRun: true, // exit after tests have completed

    webpackMiddleware: {
      noInfo: true
    },

    // Webpack takes a little while to compile -- this manifests as a really
    // long load time while webpack blocks on serving the request.
    browserNoActivityTimeout: 60000, // 60 seconds

    coverageReporter: {
      type : 'json',
      dir: 'coverageJson/',
    subdir: '.',
      file: 'coverage-final.json',
      includeAllSources: false
    },

    remapIstanbulReporter: {
      src: 'coverageJson/coverage-final.json',
      reports: {
        lcovonly: 'remap/coverage/lcov.info',
        html: 'remap/html/report'
      },
      timeoutNotCreated: 1000, // default value
      timeoutNoMoreFiles: 1000 // default value
    }
  });
};
