'use strict';

const angular = require('angular');

angular.module('demoApp')
.directive('appHello', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imgSrc: '@',
      title: '@',
      desc: '@',
      showImage: '&'
    },
    template: require('./app-hello.html')
  };
});
