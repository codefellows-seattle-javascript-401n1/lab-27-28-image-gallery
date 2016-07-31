'use strict';

const angular = require('angular');

angular.module('demoApp')
.directive('appNav', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-nav.html'),
    scope: {
      showFull: '&',
      showText: '&',
      showThumb: '&'
    }
  };
});
