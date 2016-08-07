'use strict';

const angular = require('angular')

angular.module('galleryApp').directive('appModalView', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-modal-view.html'),
    scope: {
      image: '=',
      closeModal: '&',
    }
  }
})
