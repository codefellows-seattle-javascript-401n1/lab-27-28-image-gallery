'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppGalleryController', [AppGalleryController]);

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
      title: '<Feel the Cat>',
      desc: ';sleeping cat00',
      imgSrc: require('../../asset/img/cat00.jpg')
    },
    {
      title: '<Cat one>',
      desc: ';sleeping cat01',
      imgSrc: require('../../asset/img/cat01.jpg')
    },
    {
      title: '<Cat two>',
      desc: ';sleeping cat02',
      imgSrc: require('../../asset/img/cat02.jpg')
    },
    {
      title: '<Cat three>',
      desc: ';sleeping cat03',
      imgSrc: require('../../asset/img/cat03.jpg')
    },
    {
      title: '<Cat four>',
      desc: ';sleeping cat04',
      imgSrc: require('../../asset/img/cat04.jpg')
    },
    {
      title: '<Cat five>',
      desc: ';sleeping cat05',
      imgSrc: require('../../asset/img/cat05.jpg')
    },
    {
      title: '<Cat six>',
      desc: ';sleeping cat06',
      imgSrc: require('../../asset/img/cat06.jpg')
    },
    {
      title: '<Cat seven>',
      desc: ';sleeping cat07',
      imgSrc: require('../../asset/img/cat07.jpg')
    },
    {
      title: '<Cat eight>',
      desc: ';sleeping cat08',
      imgSrc: require('../../asset/img/cat08.jpg')
    },
    {
      title: '<Cat nine>',
      desc: ';sleeping cat09',
      imgSrc: require('../../asset/img/cat09.jpg')
    },
    {
      title: '<Cat ten>',
      desc: ';sleeping cat10',
      imgSrc: require('../../asset/img/cat10.jpg')
    }
  ];
}
