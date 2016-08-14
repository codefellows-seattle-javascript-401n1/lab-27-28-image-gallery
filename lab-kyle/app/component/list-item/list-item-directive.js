'use strict';

const angular = require('angular');
angular.module('demoApp')
.directive('appListItem', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./list-item.html'),
    scope: {
      image: '='
    }
  };
});
