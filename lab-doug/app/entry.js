'use strict';


/**
 * the file loader copies index.html to index.html.  This is added to the build as a seperate file not as part of the bundles we defined in webpack.config.js
 */
require('!!file?name=[name].[ext]!./html/index.html');

/**
 * by requiring the base.scss, we are passing it through the webpack.config.js test for "scss".  This results in the base.scss and the scss files that base.scss requires for itself (like normalize.css) being added to the bundle.css file.
 */
require('./scss/base.scss');

/**
 * by requiring angular.js, we are passing it through the webpack.config.js test for ".js" files.  This results in the angular.js being bundeled into the bundle.js file.
 */
require('angular');

angular.module('galleryApp', []);

/**
 * registering the directive.  In this case, there is an index.js file in this directory and requires the js, html, and scss files.  webpack will first look at the index.js and require in the rest of the files. webpack will then run the corresponding "test" for the file extension you defined with your regex in webpack.
 */
require('./component/display-img-description');
require('./component/app-main');
