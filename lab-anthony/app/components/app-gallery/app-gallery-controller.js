'use strict';

const angular = require('angular');

angular.module('galleryApp')
.controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController() {

  this.views = {
    thumbnail: false,
    list: true,
    tile: false
  };

  this.thumbnailView = function() {
    this.views.thumbnail = true;
    this.views.list = false;
    this.views.tile = false;
  };

  this.listView = function() {
    this.views.thumbnail = false;
    this.views.list = true;
    this.views.tile = false;
  };

  this.tileView = function() {
    this.views.thumbnail = false;
    this.views.list = false;
    this.views.tile = true;
  };

  this.displayModalImage = false;

  this.showModalImage = function(imageUrl) {
    this.displayImageUrl = imageUrl;
    this.displayModalImage = true;
  };

  this.hideModalImage = function() {
    this.displayModalImage = false;
  };

  this.images = [
    {
      title: 'Mountain One',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-1.jpg')
    },
    {
      title: 'Mountain Two',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-2.jpg')
    },
    {
      title: 'Mountain Three',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-3.jpg')
    },
    {
      title: 'Mountain Four',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-4.jpg')
    },
    {
      title: 'Mountain Five',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-5.jpg')
    },
    {
      title: 'Mountain Six',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-6.jpg')
    },
    {
      title: 'Mountain Seven',
      desc: 'This is a beautiful mountain!',
      imgSrc: require('../../assets/images/mountains/mtn-7.jpg')
    }
  ];

}
