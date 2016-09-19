'use strict';
/* global angular */
// const angular = require('angular');

angular.module('demoApp')
  .directive('appGalleryItem', function(){
    return {
      restrict: 'E',
      replace: true,
      controller: 'AppGalleryItemController',
      controllerAs: 'appGalleryItemCtrl',
      bindToController: true,
      scope: {
        image: '='
      },
      template: require('./app-gallery-item.html')
    };
  });
