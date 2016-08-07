'use strict';

const angular = require('angular');

angular.module('imageGallery').controller('AppModalImageController', [AppModalImageController]);

function AppModalImageController() {
  this.image = {};
  this.updateImageWithData = function(image) {
    if (typeof image === 'object' && typeof this.image == 'object') {
      Object.keys(this.image).forEach( (key) => {
        if (image[key]) {
          this.image[key] = image[key];
        }
      });
    }
  };
}
