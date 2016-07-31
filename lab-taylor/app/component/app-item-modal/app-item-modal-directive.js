'use strict';

const angular = require('angular');

angular.module('galleryApp')
.directive('appItemModal', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imageUrl: '=',
      closeModal: '&'
    },
    template: require('./app-item-modal.html')
  };
});
