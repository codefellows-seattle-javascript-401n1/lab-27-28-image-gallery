'use strict';

const angular = require('angular');

angular.module('imageGallery').directive('appGalleryTextOnly', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imgSrc: '@',
      title: '@',
      desc: '@'
    },
    template: require('./app-gallery-text-only.html')
  };
});
