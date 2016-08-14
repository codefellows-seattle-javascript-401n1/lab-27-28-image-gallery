'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./sass/base.scss');

const angular = require('angular');
angular.module('demoApp', []);

require('./service/imageService.js');

require('./component/main');
require('./component/modal-image');
require('./component/gallery');
require('./component/list-item');
require('./component/thumb-item');
require('./component/img-item');
require('./component/header');
require('./component/app-gallery-item-form');
require('./component/app-show-modal-form');
