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
require('./component/app-image-full')
require('./component/app-image-thumb')
require('./component/app-gallery')
require('./component/app-modal-view')
