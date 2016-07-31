'use strict';

const angular = require('angular');

angular.module('galleryApp')
.directive('appGalleryThumbnail', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-gallery-thumbnail.html'),
    scope: {
      imgSrc: '@'
    }
  };
});
