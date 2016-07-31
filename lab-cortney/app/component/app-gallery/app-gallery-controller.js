'use strict';

const angular = require('angular');
angular.module('imageGallery').controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController() {
  this.images = [
    {
      title: 'Cake One',
      desc: 'The presentation of this cake sucks. What is this?!',
      imgSrc: require('../../asset/image/cake/cake-0.jpg')
    },
    {
      title: 'Cake Two',
      desc: 'I\'m gonna guess this couple is into music. Pretty!',
      imgSrc: require('../../asset/image/cake/cake-1.jpg')
    },
    {
      title: 'Cake Three',
      desc: 'This cake is in another language.',
      imgSrc: require('../../asset/image/cake/cake-2.jpg')
    },
    {
      title: 'Cake Four',
      desc: 'Ooh, I like how this cake\'s layers are stacked.',
      imgSrc: require('../../asset/image/cake/cake-3.jpg')
    },
    {
      title: 'Cake Five',
      desc: 'I keep thinking the red details are fruit, but they\'re not.',
      imgSrc: require('../../asset/image/cake/cake-4.jpg')
    },
    {
      title: 'Cake Six',
      desc: 'Happy birthday, Bill.',
      imgSrc: require('../../asset/image/cake/cake-5.jpg')
    }
  ];
}
