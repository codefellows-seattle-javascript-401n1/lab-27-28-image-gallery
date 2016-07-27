'use strict';

const angular = require('angular');

angular.module('galleryApp')
.directive('appGallery', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    controller: 'appGalleryController',
    controllerAs: 'appGalleryCtrl',
    bindToController: true,
    template: require('./app-gallery.html')
  };
});
