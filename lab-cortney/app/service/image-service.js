'use strict';

const angular = require('angular');
angular.module('imageGallery')
.factory('imageService', function() {

  const images = [];

  const addImage = function(img) {
    if (typeof img === 'object' && img.title && img.imgUrl) {
      this.images.push(img);
    }
  };

  return {
    images,
    addImage
  };
}); // end image-service module
