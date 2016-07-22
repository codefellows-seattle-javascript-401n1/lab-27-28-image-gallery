'use strict';

const angular = require('angular');

angular.module('imageGallery').controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController(){
  this.galleryItem = {
    title: '',
    desc: '',
    imgSrc: ''
  };

  this.images = [
    {
      title:' Fractal Image 1',
      desc: 'Here\'s the first fractal image',
      imgSrc: require('../../asset/image/Fractal-Full0.jpg')
    },
    {
      title: 'Fractal Image 2',
      desc: 'Here\'s the second fractal image',
      imgSrc: require('../../asset/image/Fractal-Full1.jpg')
    },
    {
      title: 'Fractal Image 3',
      desc: 'Here\'s the third fractal image',
      imgSrc: require('../../asset/image/Fractal-Full2.jpg')
    },
    {
      title: 'Fractal Image 4',
      desc: 'Here\'s the fourth fractal image',
      imgSrc: require('../../asset/image/Fractal-Full3.jpg')
    },
    {
      title: 'Fractal Image 5',
      desc: 'Here\'s the fifth fractal image',
      imgSrc: require('../../asset/image/Fractal-Full4.jpg')
    },
    {
      title: 'Fractal Image 6',
      desc: 'Here\'s the sixth fractal image',
      imgSrc: require('../../asset/image/Fractal-Full5.jpg')
    }
  ];
}
