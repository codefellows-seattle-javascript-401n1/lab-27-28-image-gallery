'use strict'

const angular = require('angular');

angular.module('galleryApp').controller('AppGalleryController, [AppGalleryController]');

function AppGalleryController(){
  this.galleryItem = {
    title: '',
    description: '',
    imgSrc: '',
  }

  this.addImageFull = function(){
    this.imageFull= {
    title: '',
    description: '',
    imgSrc: '',
  }

  function(){
    this.images.push(angular.copy(this.imageFull))
    this.imageFull = {title: '', desc: '', imgSrc: ''}
  }
}
