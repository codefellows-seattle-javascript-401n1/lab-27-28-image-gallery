'use strict';

const angular = require('angular');
angular.module('demoApp').controller('GalleryController', ['imageService', GalleryController]);

function GalleryController(imageService){
  this.galleryStyle = 'image';
  imageService.addImage({
    title: 'Dog One',
    desc: 'Mans best friend',
    imgUrl: require('../../asset/img/dog/dog_0.jpg')
  });

  imageService.addImage({
    title: 'Dog Two',
    desc: 'loyal to the bone',
    imgUrl: require('../../asset/img/dog/dog_01.jpg')
  });

  imageService.addImage({
    title: 'Dog Three',
    desc: 'wolf pack of one',
    imgUrl: require('../../asset/img/dog/dog_03.jpg')
  });

  imageService.addImage({
    title: 'Dog Four',
    desc: 'release the hounds',
    imgUrl: require('../../asset/img/dog/dog_04.jpg')
  });

  imageService.addImage({
    title: 'Dog Five',
    desc: 'where my dogs at !!!',
    imgUrl: require('../../asset/img/dog/dog_05.jpg')
  });

  console.log(imageService);
  this.images = imageService.images;
  this.selectGalleryStyle = function(style){
    if (style === 'list' || style === 'thumb' || style === 'image')
      this.galleryStyle = style;
    return this.galleryStyle;
  };
}
