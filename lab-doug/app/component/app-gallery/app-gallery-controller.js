'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController(){

  this.directiveToShow = 'desc';

  this.selectDirectiveToShow = function selectDirectiveToShow(directiveName){
    console.log('selectDirectiveToSHow called', directiveName);
    this.directiveToShow = directiveName;
  };

  this.images = [
    {
      title: 'Jaguar Concept',
      desc: 'shown in Munich Auto Show 2015',
      imgSrc: require('../../asset/image/med-res/car-300x169.jpg'),
      thumbnailSrc: require('../../asset/image/thumbnail/car-100x56.jpg')
    },

    {
      title: 'Old Timer',
      desc: 'what is this?',
      imgSrc: require('../../asset/image/med-res/oldtimer-300x169.jpg'),
      thumbnailSrc: require('../../asset/image/thumbnail/oldtimer-100x56.jpg')
    },

    {
      title: 'Mercedes Coupe',
      desc: '2 Door coupe 2015',
      imgSrc: require('../../asset/image/med-res/mercedes-300x168.jpg'),
      thumbnailSrc: require('../../asset/image/thumbnail/mercedes-100x56.jpg')
    },

    {
      title: 'Jaguar 2015',
      desc: 'black beauty',
      imgSrc: require('../../asset/image/med-res/jaguar-300x170.jpg'),
      thumbnailSrc: require('../../asset/image/thumbnail/jaguar-100x67.jpg')
    },

    {
      title: 'Mercedes SL 650',
      desc: 'McClaren version made from carbon fiber',
      imgSrc: require('../../asset/image/med-res/mercedes-amg-300x168.jpg'),
      thumbnailSrc: require('../../asset/image/thumbnail/mercedes-100x67.jpg')
    },

    {
      title: '1977 Corvette',
      desc: 'Clean white lines against the green grass',
      imgSrc: require('../../asset/image/med-res/corvette-300x168.jpg'),
      thumbnailSrc: require('../../asset/image/thumbnail/corvette-100x69.jpg')
    }

  ];
}
