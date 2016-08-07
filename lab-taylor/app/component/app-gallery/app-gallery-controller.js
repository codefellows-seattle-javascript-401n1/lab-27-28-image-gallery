'use strict';

const angular = require('angular');

angular.module('galleryApp').controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController() {
  this.nextId = 6;
  this.galleryItem = {
    title: '',
    desc: '',
    imgSrc: ''
  };

  this.galleryStyle = 'image';
  this.displayModalImage = false;

  //TODO -- refactor to use the entire image Object
  this.selectGalleryStyle = function(style) {
    if (style === 'list' || style === 'thumb' || style === 'image') {
      this.galleryStyle = style;
    }

    return this.galleryStyle;
  };

  this.showModalImage = function(image) {
    this.displayImageUrl = image.imgSrc;
    this.displayModalImage = true;
  };

  this.hideModalImage = function() {
    this.displayModalImage = false;
  };

  this.images = [
    {
      title: 'Slug Neo',
      desc: 'Hacking the mainframe',
      imgSrc: require('../../asset/image/slug/slug_01.jpg'),
      id:0
    },
    {
      title: 'Slug Trump',
      desc: 'Making America Slug Again',
      imgSrc: require('../../asset/image/slug/slug_02.jpg'),
      id:1
    },
    {
      title: 'Slug Balla',
      desc: 'Ballas B Balling',
      imgSrc: require('../../asset/image/slug/slug_03.jpg'),
      id:2
    },
    {
      title: 'Slug Life',
      desc: '4 Eva',
      imgSrc: require('../../asset/image/slug/slug_04.jpg'),
      id:3
    },
    {
      title: 'Slug Slugs',
      desc: 'All your slugs are belong to slug',
      imgSrc: require('../../asset/image/slug/slug_05.jpg'),
      id:4
    },
    {
      title: 'Slug Wall',
      desc: 'Build it higher',
      imgSrc: require('../../asset/image/slug/slug_06.jpg'),
      id:5
    }
  ];

}
