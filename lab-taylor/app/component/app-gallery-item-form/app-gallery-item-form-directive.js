'use strict';

const angular = require('angular');

angular.module('galleryApp')
.directive('appGalleryItemForm', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      btnTitle: '@',
      submit: '&'
    },
    template: require('./app-gallery-item-form.html')
  };
});
