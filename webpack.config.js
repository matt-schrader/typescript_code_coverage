var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './app.ts',
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts', exclude: [ /\.(spec|e2e)\.ts$/ ] }
    ]
  },
  test: {
    devtool: 'source-map',
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
      loaders: [
        { test: /\.ts$/, loader: 'ts' }
      ]
    }
  }
};
