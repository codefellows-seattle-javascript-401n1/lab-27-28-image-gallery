'use strict';

const angular = require('angular');

angular.module('demoApp')
.controller('AppGalleryController', [
  AppGalleryController
]);

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
      title: 'Flower One',
      desc: 'this is the type of flower power that is going to make birds happy',
      imgSrc: require('../../asset/img/flower-0.jpg')
    },
    {
      title: 'Flower Two',
      desc: 'this is the type of flower power that is going to make birds happy',
      imgSrc: require('../../asset/img/flower-1.jpg')
    },
    {
      title: 'Flower Three',
      desc: 'this is the type of flower power that is going to make birds happy',
      imgSrc: require('../../asset/img/flower-2.jpg')
    },
    {
      title: 'Flower Four',
      desc: 'this is the type of flower power that is going to make birds happy',
      imgSrc: require('../../asset/img/flower-3.jpg')
    },
    {
      title: 'Flower Five',
      desc: 'this is the type of flower power that is going to make birds happy',
      imgSrc: require('../../asset/img/flower-4.jpg')
    },
    {
      title: 'Flower Six',
      desc: 'this is the type of flower power that is going to make birds happy',
      imgSrc: require('../../asset/img/flower-5.jpg')
    },
    {
      title: 'Flower Seven',
      desc: 'this is the type of flower power that is going to make birds happy',
      imgSrc: require('../../asset/img/flower-6.jpg')
    },
    {
      title: 'Flower Eight',
      desc: 'this is the type of flower power that is going to make birds happy',
      imgSrc: require('../../asset/img/flower-7.jpg')
    },
    {
      title: 'Flower Nine',
      desc: 'this is the type of flower power that is going to make birds happy',
      imgSrc: require('../../asset/img/flower-8.jpg')
    }
  ];
}
