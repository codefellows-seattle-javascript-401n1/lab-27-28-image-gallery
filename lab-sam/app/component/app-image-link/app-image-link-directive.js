'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appImageLink', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imgLinkUrl: '@',
      title: '@',
      description: '@',
    },
    template: require('./app-image-link.html')
  }
})
