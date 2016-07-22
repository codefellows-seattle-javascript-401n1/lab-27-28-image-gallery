'use strict';
const angular = require('angular');

angular.module('galleryApp').directive('appGalleryItemThumbnail', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imgSrc: '@'
    },
    template: require('./app-gallery-item-thumbnail.html')
  };
});
