'use strict';


/**
 * the file loader copies index.html to index.html.  This is added to the build as a seperate file not as part of the bundles we defined in webpack.config.js.  One side affect of this, is that the index.html is not hot loaded by webpack after its inital copy.  This limits the developer from seeing real time changes while working.  To work around that, later, we create a "app-main" element directive that is the body of the html page.  That way, each time a change is made in any of the html templates contained within the "app-main" element (or children), the html-loader will hot load that change in real time.
 */
require('!!file?name=[name].[ext]!./html/index.html');

/**
 * by requiring the base.scss, we are passing it through the webpack.config.js test for "scss".  This results in the base.scss and the scss files that base.scss requires for itself (like normalize.css) being added to the bundle.css file.
 */
require('./scss/base.scss');

/**
 * by requiring angular.js, we are passing it through the webpack.config.js test for ".js" files.  This results in the angular.js being bundeled into the bundle.js file.
 */
const angular = require('angular');

angular.module('galleryApp', []);

/**
 * registering the directive.  In this case, there is an index.js file in these directories that requires the js and scss files as well as any controllers.  webpack will first look at the index.js and require in the rest of the files. webpack will then run the corresponding "test" for the file extension you defined with your regex in webpack. The result is that .js files get bundled into the bundle.js and the scss files get bundled into the bundle.css file.
 */
require('./component/app-main');
require('./component/app-gallery');
require('./component/display-img-description');
require('./component/display-thumbnail');
require('./component/display-list');
