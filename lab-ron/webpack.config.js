'use strict';

const autoprefixer = require('autoprefixer');
const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractText('bundle.css')
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!sass')
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
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(jpg|gif|png|jpeg)$/,
        loader: 'file?name=img/[name]-[hash].[ext]'
      },
      {
        test: /\.(eot|ttf|svg).*/,
        loader: 'file?prefix=font/'
      },
      {
        test: /\.woff.*/,
        loader: 'url?limit=10000'
      }
    ]
  }
};
