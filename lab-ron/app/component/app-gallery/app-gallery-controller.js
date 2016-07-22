'use strict';

const angular = require('angular');

angular.module = ('demoApp')
.controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController(){
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
    },{
      title: 'Flower Three',
      desc: 'this is the type of flower power that is going to make birds happy',
      imgSrc: require('../../asset/img/flower-2.jpg')
    }
  ];
}
