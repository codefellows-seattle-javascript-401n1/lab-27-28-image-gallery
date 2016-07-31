'use strict';

const angular = require('angular');

angular.module('imageGallery').controller('AppMainController', [AppMainController]);

function AppMainController(){
  this.list = true;
  this.gallery  = false;
  this.modalImage = false;

  this.showList = function(){
    if (this.list === false) this.list = true;
    if (this.gallery === true) this.gallery = false;
  };

  this.showGallery = function(){
    if (this.list === true) this.list = false;
    if (this.gallery === false) this.gallery = true;
  };

  this.showModalImage = function(imageUrl){
    this.modalImageUrl = imageUrl;
    this.modalImage = true;
  };

  this.hideModalImage = function(){
    this.modalImage = false;
  };

  this.icon = {
    galleryIcon: require('../../asset/button/gallery-icon.svg'),
    listIcon: require('../../asset/button/list-icon.svg')
  };
}
