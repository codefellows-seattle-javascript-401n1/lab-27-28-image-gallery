'use strict';

const angular = require('angular');

angular.module('galleryApp')
.directive('appModalImage', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-modal-image.html'),
    scope: {
      imageUrl: '=',
      title: '=',
      closeModal: '&'
    }
  };
});
