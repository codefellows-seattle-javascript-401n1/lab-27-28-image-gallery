'use strict';

//webpack
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

//npm
const angular = require('angular');


//angular module
angular.module('imageGallery', []);

//angular extentsions
require('./component/app-gallery');
require('./component/app-gallery-item');
require('./component/app-gallery-text');
require('./component/app-gallery-thumbnail');
require('./component/app-main');
require('./component/app-modal-image');
