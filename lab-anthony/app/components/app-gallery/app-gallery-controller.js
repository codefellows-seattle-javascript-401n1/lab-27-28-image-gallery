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
      title: 'Mountain Two',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-2.jpg')
    },
    {
      title: 'Mountain Three',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-3.jpg')
    },
    {
      title: 'Mountain Four',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-4.jpg')
    },
    {
      title: 'Mountain Five',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-5.jpg')
    },
    {
      title: 'Mountain Six',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-6.jpg')
    },
    {
      title: 'Mountain Seven',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-7.jpg')
    }
  ];

}
