'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass!')
      },
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
      // {
      //   test: /\.html$/,
      //   loader: 'file?name=[hash].[ext]',
      // }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
