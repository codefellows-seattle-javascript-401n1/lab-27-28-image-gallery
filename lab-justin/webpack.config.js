'use strict';

const ExtractText = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

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
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!postcss!sass!')
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(eot|ttf|svg).*/,
        loader: 'file?prefix=font/'
      },
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'file?name=img/[hash].[ext]'
      },
      {
        test: /\.woff.*/,
        loader: 'url'
      }
    ]
  },
  sassLoader: {
    includePaths: [`${__dirname}/app/scss/lib`]
  },
  postcss: [ autoprefixer({browsers: ['last 2 versions']})]
};
