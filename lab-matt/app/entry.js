'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');


const angular = require('angular');

angular.module('demoApp', []);

require('./component/app-hello');
require('./component/app-gallery-item');
require('./component/app-main');
require('./component/app-thumbnail');
require('./component/app-fullsize');
require('./component/app-modal-image');
