'use strict';

const angular = require('angular');

angular.module('imageGallery').directive('AppGallery', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-gallery.html'),
    controller: 'AppGalleryController',
    controllerAs: 'appGalleryCtrl',
    bindToController: true,
    scope: {
      images: '&'
    }
  };
});
