'use strict';
const angular = require('angular');

angular.module('galleryApp').directive('appGalleryItemThumbnail', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      img: '=',
      showModal: '&',
      updateImage: '&'
    },
    template: require('./app-gallery-item-thumbnail.html')
  };
});
