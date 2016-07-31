'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController () {
  console.log('hitting');
  this.galleryItem = {
    title: '',
    desc: '',
    imgSrc: ''
  };

  this.addGalleryItem = function () {
    this.images.push(angular.copy(this.galleryItem));
    this.galleryItem = {title: '', desc: '', imgSrc: ''};
  };

  this.images = [

    {
      title: 'Flower One',
      desc: 'description 1',
      imgSrc: require('../../asset/img/flower/flower-0.jpg')
    },

    {
      title: 'Flower Two',
      desc: 'description 2',
      imgSrc: require('../../asset/img/flower/flower-1.jpg')

    },

    {
      title: 'Flower Three',
      desc: 'description 3',
      imgSrc: require('../../asset/img/flower/flower-2.jpg')

    },

    {

      title: 'Flower Four',
      desc: 'description 4',
      imgSrc: require('../../asset/img/flower/flower-3.jpg')

    },

    {
      title: 'Flower Five',
      desc: 'description 5',
      imgSrc: require('../../asset/img/flower/flower-4.jpg')

    },

    {
      title: 'Flower Six',
      desc: 'description 6',
      imgSrc: require('../../asset/img/flower/flower-5.jpg')

    },

    {
      title: 'Flower Seven',
      desc: 'description 7',
      imgSrc: require('../../asset/img/flower/flower-6.jpg')

    },

    {
      title: 'Flower Eight',
      desc: 'description 8',
      imgSrc: require('../../asset/img/flower/flower-7.jpg')

    },

    {
      title: 'Flower Nine',
      desc: 'description 9',
      imgSrc: require('../../asset/img/flower/flower-8.jpg')

    },

    {
      title: 'Flower Ten',
      desc: 'description 10',
      imgSrc: require('../../asset/img/flower/flower-9.jpg')

    }
  ];
}
