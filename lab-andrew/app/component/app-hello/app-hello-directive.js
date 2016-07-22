'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appHello', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      example: '@'
    },
    controller: 'AppHelloController',
    controllerAs: 'appHelloCtrl',
    bindToController: true,
    template: require('./app-hello.html')
  };
});
