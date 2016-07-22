'use strict';

const angular = require('angular');

angular.module('imageGallery')
.directive('appMain', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-main.html')
  };
});
