var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/greeter.spec.ts',
  output: {

    publicPath: "/assets/",
    filename: 'build/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.spec.ts']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts', exclude: [ /\.(e2e)\.ts$/ ] }
    ]
  }
};
