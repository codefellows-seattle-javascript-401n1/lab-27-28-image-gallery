'use strict';

const angular = require('angular');

angular.module('imageGallery').directive('appModalImage', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-modal-image.html'),
    scope: {
      image: '=',
      close: '&'
    }
  };
});
