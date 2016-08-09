'use strict';

const angular = require('angular');
angular.module('galleryApp').controller('MainController', [MainController]);

function MainController(){
  console.log('hitting main cotntroller');

  this.displayModalImage = false;

  this.hideModalImage = function(){
    this.displayModalImage = false;
  };

  this.showModalImage = function(image){
    console.log('display1??', this.displayModalImage);
    this.modalImage = image;
    this.displayModalImage = true;
    console.log('showModalImage', this.modalImage);
    console.log('display2??', this.displayModalImage);
  };
}
