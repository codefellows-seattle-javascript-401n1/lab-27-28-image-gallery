'use strict';

//force it to use the file-loader once we configured the html loader//
require('!!file?name=[name].[ext]!./html/index.html');
require('./sass/base.scss');

//npm module
const angular = require('angular');

//create angular module//
angular.module('galleryApp', []);

//angular module extensions//
require('./component/app-hello');
