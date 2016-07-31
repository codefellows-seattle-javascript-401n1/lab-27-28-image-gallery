'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appGalleryItemText', function() {
  return {
    restrict: 'E',
    replace: true,
    scope:{
      imgSrc: '@',
      title: '@',
      desc: '@'
    },
    template: require('./app-gallery-item-text.html')
  };
});
