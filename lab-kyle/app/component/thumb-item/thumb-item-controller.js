'use strict';

const angular = require('angular');
angular.module('demoApp').controller('ThumbController', [ThumbController]);

function ThumbController(){
  this.displayModalImage = true;

  this.hideModalImage = function(){
    this.displayModalImage = false;
  };

  this.showModalImage = function(image){
    this.modalImage = image;
    this.displayModalImage = true;
  };
}
