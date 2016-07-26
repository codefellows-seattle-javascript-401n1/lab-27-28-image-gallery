'use strict'

// webpack
require('!!file?name=[name].[ext]!./html/index.html')
require('./sass/base.scss')
// npm mods
const angular = require('angular')
// app mods
angular.module('galleryApp', [])
// angular mod exts
require('./component/app-image-link')
