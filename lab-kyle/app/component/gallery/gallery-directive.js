'use strict';

require('angular').module('demoApp')
.directive('gallery', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./gallery.html'),
    controller: 'GalleryController',
    controllerAs: 'galleryCtrl'
  };
});
