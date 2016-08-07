'use strict';

const angular = require('angular');
angular.module('imageGallery')
.controller('AppGalleryThumbController', [AppGalleryThumbController]);

function AppGalleryThumbController() { // for displaying thumbnail modals only

  this.thumbModalImage = {};

  this.displayThumbsModalImage = false;

  this.hideThumbsModalImage = function() {
    this.displayThumbsModalImage = false;
  };

  this.showThumbsModalImage = function(image) {
    this.thumbModalImage = image;
    this.displayThumbsModalImage = true;

  };
}
