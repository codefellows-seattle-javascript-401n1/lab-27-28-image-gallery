'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController(){

  var directiveToShow = 'descr';

  function selectDirectiveToShow(directiveName){
    directiveToShow = directiveName;
  }
  
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
      imgSrc: require('../../asset/image/med-res/car-300x169.jpg')
    },

    {
      title: 'Old Timer',
      desc: 'what is this?',
      imgSrc: require('../../asset/image/med-res/oldtimer-300x169.jpg')
    },

    {
      title: 'Mercedes Coupe',
      desc: '2 Door coupe 2015',
      imgSrc: require('../../asset/image/med-res/mercedes-300x168.jpg')
    },

    {
      title: 'Jaguar 2015',
      desc: 'black beauty',
      imgSrc: require('../../asset/image/med-res/jaguar-300x200.jpg')
    },

    {
      title: 'Mercedes SL 650',
      desc: 'McClaren version made from carbon fiber',
      imgSrc: require('../../asset/image/med-res/mercedes-amg-300x200.jpg')
    },

    {
      title: '1977 Corvette',
      desc: 'Clean white lines against the green grass',
      imgSrc: require('../../asset/image/med-res/corvette-300x206.jpg')
    }

  ];
}
