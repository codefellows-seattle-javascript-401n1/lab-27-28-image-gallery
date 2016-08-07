'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appModalViewForm', function() {
  return {
    restrict: 'E',
    replace: true,
    template: ('./app-modal-view-form.html'),
    scope: {
      showImage: '&',
    }
  };
});
