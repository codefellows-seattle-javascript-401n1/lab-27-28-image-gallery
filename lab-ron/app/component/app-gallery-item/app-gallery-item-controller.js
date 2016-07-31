'use strict';

const angular = require('angular');
angular.module('demoApp').controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController(){
  this.updateImage = function(image){
    Object.keys(this.image).forEach(key => {
      if(image[key]) this.image[key] = image[key];
    });
  };
}
