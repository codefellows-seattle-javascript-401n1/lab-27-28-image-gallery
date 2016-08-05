'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appModalView', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      showModal: '&',
      imgUrl: '=',
      closeModal: '&'
    },
    template: require('./app-modal-view.html')
  };
});
