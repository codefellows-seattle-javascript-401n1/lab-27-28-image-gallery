'use strict';

const angular = require('angular');

angular.module('imageGallery').directive('appGalleryThumb', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-gallery-thumb.html'),
    scope: {
      image: '='
    }
  };
});
