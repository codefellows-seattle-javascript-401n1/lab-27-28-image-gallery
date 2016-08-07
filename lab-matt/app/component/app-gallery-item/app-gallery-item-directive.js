'use strict';

const angular = require('angular');

angular.module('demoApp')
.directive('appGalleryItem', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imgSrc: '@',
      title: '@',
      desc: '@',
      image: '='
    },
    controller: 'AppGalleryItemController',
    controllerAs: 'appGalleryCtrl',
    bindToController: true,
    template: require('./app-gallery-item.html')
  };
});
