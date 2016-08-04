'use strict';

const angular = require('angular');

angular.module('imageGallery')
.directive('appGalleryEdit', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-gallery-edit.html'),
    scope: {
      btnTitle: '@',
      submit: '&'
    }
  };
});
