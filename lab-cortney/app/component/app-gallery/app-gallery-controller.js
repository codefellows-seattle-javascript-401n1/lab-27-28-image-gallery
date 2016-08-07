'use strict';

const angular = require('angular');

angular.module('imageGallery')
.controller('AppGalleryController', [
  'imageService',
  AppGalleryController
]);

function AppGalleryController(imageService) {

  imageService.addImage({
    title: 'Cake One',
    desc: 'The presentation of this cake sucks. What is this?!',
    imgUrl: require('../../asset/image/cake/cake-0.jpg')
  });

  imageService.addImage({
    title: 'Cake Two',
    desc: 'A "rustic" style of cake. I\'d eat it!',
    imgUrl: require('../../asset/image/cake/cake-1.jpg')
  });

  imageService.addImage({
    title: 'Cake Three',
    desc: 'This cake is in another language.',
    imgUrl: require('../../asset/image/cake/cake-2.jpg')
  });

  imageService.addImage({
    title: 'Cake Four',
    desc: 'Ooh, I like how this cake\'s layers are stacked.',
    imgUrl: require('../../asset/image/cake/cake-3.jpg')
  });

  imageService.addImage({
    title: 'Cake Five',
    desc: 'I keep thinking the red details are fruit, but they\'re not.',
    imgUrl: require('../../asset/image/cake/cake-4.jpg')
  });

  imageService.addImage({
    title: 'Cake Six',
    desc: 'Happy birthday, Bill.',
    imgUrl: require('../../asset/image/cake/cake-5.jpg')
  });

  this.images = imageService.images;
  this.selectGalleryStyle = function(style) {
    if (style === 'list' || style === 'thumb' || style === 'image') {
      this.galleryStyle = style;
      return this.galleryStyle;
    }
  };
}
