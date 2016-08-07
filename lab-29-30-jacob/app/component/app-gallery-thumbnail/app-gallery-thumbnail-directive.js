'use strict';

const angular = require('angular');

angular.module('imageGallery')
.directive('appGalleryThumbnail', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {
      thumbSrc: '@'
    },
    template: require('./app-gallery-thumbnail.html')
  };
});
