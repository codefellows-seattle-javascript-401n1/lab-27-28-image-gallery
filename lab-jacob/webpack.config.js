'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path:'build',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('styele', 'css!sass!')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html/,
        loader: 'html'
      },
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'file'
      }
    ]
  }
};
