'use strict';

const angular = require('angular');

angular.module('demoApp')
.directive('appHeader', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./header.html'),
    scope: {
      selectGalleryStyle: '&'
    }
  };
});
