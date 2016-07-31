'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appMain', function(){
  return  {
    restrict: 'E',
    replace: true,
    scope: {
      imgSrc:'@',
      title: '@',
      desc: '@',
    },
    template: require('./app-main.html'),
  };
});
