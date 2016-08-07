'use strict';

require('angular').module('demoApp')
.directive('appGallery', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./gallery.html'),
    controller: 'GalleryController',
    controllerAs: 'galleryCtrl',
    bindToController: true
  };
});
