'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appGalleryThumbnail', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imageModal: '=',
      imgSrc: '@',
      showModal: '&'
    },
    template: require('./app-gallery-thumbnail.html')
  };
});
