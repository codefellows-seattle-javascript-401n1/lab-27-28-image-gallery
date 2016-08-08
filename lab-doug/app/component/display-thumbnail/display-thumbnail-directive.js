'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('displayThumbnail', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./display-thumbnail.html'),
    scope: {
      imgSrc: '@',
      title: '@'
    }
  };
});
