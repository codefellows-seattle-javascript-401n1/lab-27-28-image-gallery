'use strict';

const angular = require('angular');

angular.module('galleryApp')
.controller('AppTextController', [AppTextController]);

function AppTextController(){
  this.updateImage = function(image){
    console.log('update hit', this.image);
    if (image.title) this.image.title = image.title;
    if (image.imgSrc) this.image.imgSrc = image.imgSrc;
  };
}
