'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController(){
  // this.galleryItem = {
  //   title: '',
  //   desc: '',
  //   imgSrc: ''
  // };
  //
  // this.addGalleryItem = function(){
  //   this.images.push(angular.copy(this.galleryItem));
  //   this.galleryItem = {
  //     title: '',
  //     desc: '',
  //     imgSrc: ''
  //   };

  this.images = [
    {
      title: 'Jaguar Concept',
      desc: 'shown in Munich Auto Show 2015',
      imgSrc: require('../../asset/image/full-size/car-960x540.jpg')
    },
    {
      title: '1977 Corvette',
      desc: 'Clean white lines against the green grass',
      imgSrc: require('../../asset/image/full-size/corvette-960x660.jpg')
    },
    {
      title: 'Jaguar 2015',
      desc: 'black beauty',
      imgSrc: require('../../asset/image/full-size/jaguar-960x639.jpg')
    },
    {
      title: 'Mercedes Coupe',
      desc: '2 Door coupe 2015',
      imgSrc: require('../../asset/image/full-size/mercedes-960x539.jpg')
    },
    {
      title: 'Mercedes SL 650',
      desc: 'McClaren version made from carbon fiber',
      imgSrc: require('../../asset/image/full-size/mercedes-960x640.jpg')
    },
    {
      title: 'Old Timer',
      desc: 'what is this?',
      imgSrc: require('../../asset/image/full-size/oldtimer-960x540.jpg')
    }
  ];
}
