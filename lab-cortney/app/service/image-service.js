'use strict';

const angular = require('angular');
angular.module('imageGallery')
.factory('imageService', function() {

  const images = [];

  const addImage = function(img) {
    this.images.push(img);
  };

  return {
    images,
    addImage
  };
}); // end image-service module
