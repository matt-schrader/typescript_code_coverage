var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/spec.bundle.ts',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.ts', '.spec.ts']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts', exclude: [ /\.(e2e)\.ts$/ ] }
    ]
  }
};