'use strict';

const angular = require('angular');
angular.module('demoApp')
.directive('appGalleryItemForm', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      btnTitle: '@',
      submit: '&'
    },
    template: require('./app-edit-gallery-item-from.html')
  };
});
