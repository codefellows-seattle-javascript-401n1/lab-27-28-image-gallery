'use strict';
const angular = require('angular');

angular.module('galleryApp').directive('appGalleryItemThumbnail', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      image: '=',
      showModal: '&'
    },
    controller: 'AppGalleryThumbnailController',
    controllerAs: 'appGalleryThumbCtrl',
    bindToController: true,
    template: require('./app-gallery-item-thumbnail.html')
  };
});
