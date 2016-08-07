'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('appImageThumbController', [appImageThumbController]);

function appImageThumbController(){
  this.displayModalImage = false;

  this.showModalImage = function(image){
    this.displayModalImage = true;
    console.log("clicked ", image, this.displayModalImage);
    // this.displayImageSrc = image.imgSrc;
    // this.displayImageTitle = image.title;
  }

  this.hideModalImage = function(){
    console.log('HIDE ME!');
    this.displayModalImage = false;
  }
}
