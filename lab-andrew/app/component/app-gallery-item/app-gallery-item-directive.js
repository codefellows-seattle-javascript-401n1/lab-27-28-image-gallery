'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appGalleryItem', function () {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      title: '@',
      desc: '@',
      imgSrc: '@',
    },
    controller: 'AppGalleryItemController',
    controllerAs: 'appGalleryCtrl',
    bindToController: true,
    template: require('./app-gallery-item.html')
  };
});
