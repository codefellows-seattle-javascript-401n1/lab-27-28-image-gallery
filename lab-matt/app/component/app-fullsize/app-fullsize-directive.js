'use strict';

const angular = require('angular');

angular.module('demoApp')
.directive('appFullsize', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imgSrc: '@',
      showImage: '&'
    },
    template: require('./app-fullsize.html')
  };
});
