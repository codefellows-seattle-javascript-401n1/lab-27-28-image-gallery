'use strict';

const angular = require('angular');

angular.module('demoApp')
.directive('appFullsize', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imgSrc: '@'
    },
    template: require('./app-fullsize.html')
  };
});
