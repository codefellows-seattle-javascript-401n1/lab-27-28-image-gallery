'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appImageFull', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imgSrc: '@',
      title: '@',
      description: '@',
    },
    template: require('./app-image-full.html')
  }
})
