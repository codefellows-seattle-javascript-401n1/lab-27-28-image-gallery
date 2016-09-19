'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');
// npm moudles
const angular = require('angular');
// app modules
// create angular module
angular.module('demoApp', []);
// angular module extensions
require('./component/app-main');
require('./component/app-modal-image');
require('./component/app-show-modal-form');
require('./component/app-gallery-item');
require('./component/app-gallery-item-form');
