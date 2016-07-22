'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./sass/base.scss');

const angular = require('angular');
angular.module('demoApp', []);
