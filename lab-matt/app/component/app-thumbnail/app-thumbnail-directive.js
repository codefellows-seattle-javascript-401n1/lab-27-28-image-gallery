'use strict';

const angular = require('angular');

angular.module('demoApp')
.directive('appThumbnail', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      imgSrc: '@',
      showImage: '&'

    },
    template: require('./app-thumbnail.html')
  };
});
