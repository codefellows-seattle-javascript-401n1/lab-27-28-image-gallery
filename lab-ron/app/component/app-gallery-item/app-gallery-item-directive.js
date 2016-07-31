'use strict';

const angular = require('angular');
angular.module('demoApp')
.directive('appGalleryItem', function(){
  return {
    restrict: 'E',
    replace: true,
    controller: 'AppGalleryController',
    controllerAs: 'appGalleryItemCtrl',
    bindToController: true,
    scope: {
      img: '='
    },
    template: require('./app-gallery-item.html')
  };
});
