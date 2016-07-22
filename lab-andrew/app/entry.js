'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./sass/base.scss');

const angular = require('angular');

angular.module('galleryApp', []);

require('./component/app-hello');
require('./component/app-gallery-item');
require('./component/app-main');
