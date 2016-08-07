'use strict';

const angular = require('angular');

angular.module('imageGallery')
.controller('AppMainController', [AppMainController]);

function AppMainController() {

  const frownyFace = require('../../asset/image/default/frown.jpg');

  this.displayModalImage = true;

  this.hideModalImage = function() {
    this.displayModalImage = false;
  };

  this.showModalImage = function(image) {
    this.modalImage = image || frownyFace;
    console.log('boooo');
    this.displayModalImage = true;
  };

}
