let
  path = require('path'),
  webpack = require('webpack'),
  extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: './dist',
    filename: 'bundle.[hash].js',
    chunkFilename: '[id].[chunkhash].js'
  },

  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      exclude: 'node_modules'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: 'node_modules'
    }]
  }
};