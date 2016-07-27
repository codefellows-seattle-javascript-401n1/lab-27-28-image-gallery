'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build'
  },

  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],

  module: {

    /**
     * webpack allows us to register loaders. The loaders configure what a require statement does for a given file type.
     */
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
      },

      /**
       * "html-loader" loads html templates into bundle.js as literal strings.  Each time you "require" a particular html file (like in the template property in our directives), it will return that specific literal string
       */
      {
        test: /\.html$/,
        loader: 'html',
      },

      /**
       * The file loader does not add anything to the bundle.  It does copy the file to the build directory.  In this case to the "img" sub-directory.  When a file is "required" it will return the path to where this file was copied to.
       */
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'file?name=img/[name]-[hash].[ext]',
      }
    ]
  },

};
