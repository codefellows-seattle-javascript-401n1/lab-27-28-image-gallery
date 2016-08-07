'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppGalleryThumbnailController', [AppGalleryThumbnailController]);

function AppGalleryThumbnailController() {
  this.updateImage = function(image){
    Object.keys(this.image).forEach((key) => {
      if (image[key]) this.image[key] = image[key];
    });
  };
}
