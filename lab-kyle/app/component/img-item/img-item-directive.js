'use strict';

const angular = require('angular');

angular.module('demoApp')
.directive('appImgItem', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./img-item.html'),
    scope: {
      image: '='
    }
  };
});
