'use strict';

const angular = require('angular');

angular.module('imageGallery')
.directive('appGalleryText', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      link: '@',
      title: '@',
      desc: '@'
    },
    template: require('./app-gallery-text.html')
  };
});
