var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '.',
    // Add any browsers here
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    autoWatch: false,
    files: [
      './build/bundle.js'
    ],
    preprocessors: {
      './build/bundle.js': ['coverage']
    },
    client: {
      // log console output in our test console
      captureConsole: true
    },

    reporters: ['progress', 'coverage'],
    singleRun: true,

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
      includeAllSources: true
    }
  });
};
