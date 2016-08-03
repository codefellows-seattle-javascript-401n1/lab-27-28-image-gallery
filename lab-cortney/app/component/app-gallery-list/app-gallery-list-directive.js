'use strict';

const angular = require('angular');

angular.module('imageGallery').directive('AppGalleryList', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-gallery-list.html'),
    scope: {
      image: '='
    }
  };
});
