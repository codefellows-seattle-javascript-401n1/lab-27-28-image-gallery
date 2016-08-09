'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
angular.module('galleryApp', []);
require('./service/imageService.js');

require('./component/main');
require('./component/header');
require('./component/modal-image');
require('./component/gallery');
require('./component/list-item');
require('./component/thumb-item');
require('./component/img-item');
// require('./component/social-status');
