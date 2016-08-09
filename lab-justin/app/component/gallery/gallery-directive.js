'use strict';

const angular = require('angular');
angular.module('galleryApp')
.directive('appGallery', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./gallery.html'),
    controller: 'GalleryController',
    controllerAs: 'galleryCtrl'

    // bindToController: true
  };
});
