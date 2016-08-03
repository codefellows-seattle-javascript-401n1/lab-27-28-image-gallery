'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
angular.module('imageGallery', []);

require('./service/image-service.js');

require('./component/app-main');
require('./component/app-gallery');
require('./component/app-gallery-list');
require('./component/app-gallery-thumb');
require('./component/app-gallery-item');
require('./component/app-modal-image');
