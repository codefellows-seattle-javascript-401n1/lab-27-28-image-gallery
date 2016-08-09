'use strict';

const angular = require('angular');
angular.module('galleryApp')
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
