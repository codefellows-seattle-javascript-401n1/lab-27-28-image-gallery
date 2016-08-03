'use strict';

const angular = require('angular');

angular.module('imageGallery')
.controller('AppMainController', [AppMainController]);

function AppMainController() {

  this.displayModalImage = false;

  this.hideModalImage = function() {
    this.displayModalImage = false;
  };

  this.showModalImage = function(image) {
    this.modalImage = image;
    this.displayModalImage = true;
  };
  
}
