'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('appImageThumbController', [appImageThumbController]);

function appImageThumbController(){
  this.displayModalImage = false;
  this.displayImageForm = false;

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

  this.toggleForm = function(){
    if(this.displayImageForm === false){
      this.displayImageForm = true;
    }
    if(this.displayImageForm === true){
      this.displayImageForm = false;
    }
    console.log("displayImageForm:", displayImageForm);
  }
}
