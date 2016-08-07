'use strict';

const angular = require('angular');

angular.module('demoApp')
.directive('appGalleryForm', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-gallery-form.html'),
    scope: {
      btnTitle: '@',
      submit: '&'
    }
  };
});
