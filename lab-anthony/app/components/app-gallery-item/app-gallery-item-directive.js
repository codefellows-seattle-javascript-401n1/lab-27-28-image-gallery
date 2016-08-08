'use strict';

const angular = require('angular');

angular.module('galleryApp')
.directive('appGalleryItem', function(){
  return {
    restrict: 'E',
    replace: true,
    controller: 'AppGalleryItemController',
    controllerAs: 'appGalleryItemCtrl',
    bindToController: true,
    scope: {
      image: '=',
      showModalImage: '&'
    },
    template: require('./app-gallery-item.html')
  };
});
