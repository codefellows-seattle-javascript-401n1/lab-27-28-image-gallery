'use strict';

const angular = require('angular');
angular.module('galleryApp')
.controller('ModalImageController', [ModalImageController]);

function ModalImageController(){
  this.image;
  this.title;

  this.updateImageWithData = function(image){
    if (typeof image === 'object' && typeof this.image === 'object') {
      Object.keys(this.image).forEach((key) => {
        if (image[key])
          this.image[key] = image[key];
        this.image = image;
        //
        this.image.title = image.title;
        this.image.desc = image.desc;
      });
    }


  };
}
