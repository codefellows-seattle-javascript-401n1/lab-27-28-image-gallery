'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appModalView', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imgUrl: '@',
      showModal: '&',
      closeModal: '&'
    },
    template: require('./app-modal-view.html')
  };
});
