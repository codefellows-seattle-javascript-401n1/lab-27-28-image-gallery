'use strict';

const angular = require('angular');

angular.module('galleryApp')
.directive('appGalleryItemForm', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-gallery-item-form.html'),
    scope: {
      btnTitle: '@',
      submit: '&'
    }
  };
});
