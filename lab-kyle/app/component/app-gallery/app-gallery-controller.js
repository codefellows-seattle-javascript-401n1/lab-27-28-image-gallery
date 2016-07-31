'use strict';

const angular = require('angular');

angular.module('demoApp').controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController(){
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
      title: 'Dog One',
      desc: 'Mans best friend',
      imgSrc: require('../../asset/img/dog/dog_0.jpg')
    },
    {
      title: 'Dog Two',
      desc: 'loyal to the bone',
      imgSrc: require('../../asset/img/dog/dog_01.jpg')
    },
    {
      title: 'Dog Three',
      desc: 'wolf pack of one',
      imgSrc: require('../../asset/img/dog/dog_03.jpg')
    },
    {
      title: 'Dog Four',
      desc: 'release the hounds',
      imgSrc: require('../../asset/img/dog/dog_04.jpg')
    },
    {
      title: 'Dog Five',
      desc: 'where my dogs at !!!',
      imgSrc: require('../../asset/img/dog/dog_05.jpg')
    }
  ];
}
