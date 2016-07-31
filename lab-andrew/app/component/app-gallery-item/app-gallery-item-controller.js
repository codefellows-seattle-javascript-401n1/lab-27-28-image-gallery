'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppGalleryItemController', [AppGalleryItemController]);

function AppGalleryItemController() {
  this.galleryImage = {
    title: '',
    desc: '',
    imgSrc: ''
  };

  this.images = [
    {
      title: 'cave1',
      desc: 'entrance',
      imgSrc: require('../../asset/image/entrance.jpg')
    },
    {
      title: 'cave2',
      desc: 'the Hall',
      imgSrc: require('../../asset/image/theHall.jpg')
    },
    {
      title: 'cave3',
      desc: 'The Hole',
      imgSrc: require('../../asset/image/theHole.jpg')
    },
    {
      title: 'cave4',
      desc: 'Low Bridge',
      imgSrc: require('../../asset/image/lowBridge.jpg')
    },
    {
      title: 'cave5',
      desc: 'still waters',
      imgSrc: require('../../asset/image/stillWaters.jpg')
    },
    {
      title: 'cave6',
      desc: 'the door within',
      imgSrc: require('../../asset/image/doorWithin.jpg')
    },
    {
      title: 'cave7',
      desc: 'long high bridge',
      imgSrc: require('../../asset/image/longHighBridge.jpg')
    },
    {
      title: 'cave8',
      desc: 'the Hole',
      imgSrc: require('../../asset/image/theHole.jpg')
    },
    {
      title: 'cave9',
      desc: 'the river',
      imgSrc: require('../../asset/image/theRiver.jpg')
    },
  ];
}
