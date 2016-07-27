'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appGalleryThumbnail', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imgsrc: '@',
    },
    template: require('./app-gallery-thumbnail.html')
  };
});
