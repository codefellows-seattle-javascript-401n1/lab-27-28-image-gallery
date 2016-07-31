'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appImageThumb', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imgThumbSrc: '@',
    },
    template: require('./app-image-thumb.html')
  }
})
