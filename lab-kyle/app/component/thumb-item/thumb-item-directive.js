'use strict';

const angular = require('angular');

angular.module('demoApp')
.directive('appThumbItem', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./thumb-item.html'),
    scope: {
      image: '='
    }
  };
});
