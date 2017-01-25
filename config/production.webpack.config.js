var
  webpack = require('webpack'),
  extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: './dist',
    filename: '[name].[hash].js'
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