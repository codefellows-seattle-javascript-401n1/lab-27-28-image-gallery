'use strict';

const angular = require('angular');

angular.module('galleryApp')
.controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController() {
  this.galleryItem = {
    title: '',
    desc: '',
    imgSrc: ''
  };

  this.addGalleryItem = function(){
    this.images.push(angular.copy(this.galleryItem));
    this.galleryItem = {title: '', desc: '', imgSrc: ''};
  };

  this.images = [
    {
      title: 'Mountain One',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-1.jpg')
    },
    {
      title: 'Mountain One',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-1.jpg')
    }
  ];

}
