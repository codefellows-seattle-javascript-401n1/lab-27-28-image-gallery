'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appText', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imgSrc:'@',
      title: '@',
      desc: '@',
    },
    template: require('./app-text.html')
  };
});
