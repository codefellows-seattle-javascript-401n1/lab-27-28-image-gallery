'use strict';

const angular = require('angular');

angular.module('galleryApp')
.directive('appGalleryHeader', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-gallery-header.html'),
    scope: {
      selectGalleryStyle: '&'
    }
  };
});
