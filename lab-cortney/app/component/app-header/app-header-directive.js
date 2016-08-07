'use strict';

const angular = require('angular');

angular.module('imageGallery')
.directive('appHeader', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-header.html'),
    scope: {
      selectGalleryStyle: '&'
    }
  };
});
