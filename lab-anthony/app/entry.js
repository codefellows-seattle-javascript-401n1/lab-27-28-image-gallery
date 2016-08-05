'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./sass/base.scss');

// npm modules
const angular = require('angular');

// app modules
// create angular module
angular.module('galleryApp', []);

// angular module extensions
require('./components/app-main');
require('./components/app-gallery-item');
require('./components/app-gallery-item-form');
require('./components/app-gallery-thumbnail');
require('./components/app-gallery-text');
require('./components/app-gallery');
