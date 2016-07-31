'use strict';

const angular = require('angular');

angular.module('demoApp').controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController(){
  this.galleryItem = {
    title: '',
    desc:'',
    imgSrc:''
  };




  this.addGalleryItem = function(){
    this.images.push(angular.copy(this.galleryItem));
    this.galleryItem = {title:'', desc:'', imgSrc:''};
  };
  console.log('add GalleryItem',this.addGalleryItem);
  this.images = [
    {
      title: 'Flower One',
      desc: 'Love sky',
      imgSrc: require('../../asset/images/blueflower1.jpeg')
    },
    {
      title: 'Flower Two',
      desc: 'Pureness',
      imgSrc: require('../../asset/images/greenflower.jpeg')
    },
    {
      title: 'Flower Three',
      desc: 'Sweet elengant',
      imgSrc: require('../../asset/images/mixedflower.jpeg')
    },
    {
      title: 'Flower Four',
      desc: 'Passion',
      imgSrc: require('../../asset/images/orangeflower.jpeg')
    },
    {
      title: 'Flower Five',
      desc: 'Cuites',
      imgSrc: require('../../asset/images/whiteflower.jpeg')
    },
    {
      title: 'Flower Six',
      desc: 'Warm fresh',
      imgSrc: require('../../asset/images/yellowflower.jpeg')
    }
  ];
}
