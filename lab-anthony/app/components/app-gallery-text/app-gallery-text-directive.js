'use strict';

const angular = require('angular');

angular.module('galleryApp')
.directive('appGalleryText', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-gallery-text.html'),
    scope: {
      title: '@',
      imgSrc: '@',
      desc: '@'
    }
  };
});
