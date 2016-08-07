'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appImageThumb', function(){
  return {
    restrict: 'E',
    replace: true,
    controller: 'appImageThumbController',
    controllerAs: 'appImageThumbCtrl',
    bindToController: true,
    scope: {
      image: '='
    },
    template: require('./app-image-thumb.html')
  }
})
