'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController() {
  this.galleryItem = {
    title: '',
    desc: '',
    imgSrc: ''
  };

  this.images = [
    {
      title: 'Cat One',
      desc: 'This is the first cat',
      imgSrc: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
    },
    {
      title: 'Cat Two',
      desc: 'This is the second cat',
      imgSrc: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
    },
    {
      title: 'Cat Three',
      desc: 'This is the thrid cat',
      imgSrc: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
    },
    {
      title: 'Cat Brittany',
      desc: 'This is Brittanys Cat',
      imgSrc: 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'
    }
  ];

}
