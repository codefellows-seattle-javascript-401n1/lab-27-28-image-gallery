'use strict';

const angular = require('angular');

angular.module('imageGallery')
.directive('appGalleryItem', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-gallery-item.html'),
    controller: 'AppGalleryItemController',
    controllerAs: 'appGalleryItemCtrl',
    bindToController: true,
    scope: {
      image: '='
    }
  };
});
