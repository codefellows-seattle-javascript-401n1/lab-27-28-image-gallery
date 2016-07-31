'use strict'

const angular = require('angular');

angular.module('galleryApp').controller('AppGalleryController', [AppGalleryController]);

function AppGalleryController(){
  this.imageFull = {
    title: '',
    description: '',
    imgSrc: '',
  }

  this.addImageFull = function(){
    this.images.push(angular.copy(this.imageFull))
    this.imageFull = {title: '', description: '', imgSrc: ''}
  }

  this.linkView = true;
  this.thumbView = false;
  this.fullView = false;

  this.activateLinkView = function(){
    this.linkView = true;
    this.thumbView = false;
    this.fullView = false;
  };

  this.activateThumbView = function(){
    this.linkView = false;
    this.thumbView = true;
    this.fullView = false;
  };

  this.activateFullView = function(){
    this.linkView = false;
    this.thumbView = false;
    this.fullView = true
  };

  this.images = [
    {
      title: 'Dragon One',
      link: 'https://www.flickr.com/photos/sloalan/1225809846/',
      description: 'top-down veiw on dis beauty',
      imgSrc: require('../../../assets/Dragonflies/one.jpg'),
      imgThumbSrc: require('../../../assets/Dragonflies/one-thumb.jpg')
    },
    {
      title: 'Dragon Two',
      link: 'https://www.flickr.com/photos/benjaminevans/9402002415/',
      description: 'technically dis is a damselfly, see how it can fold it\'s wings',
      imgSrc: require('../../../assets/Dragonflies/two.jpg'),
      imgThumbSrc: require('../../../assets/Dragonflies/two-thumb.jpg')
    },
    {
      title: 'Dragon Three',
      link: 'https://www.flickr.com/photos/sloalan/14207319525/',
      description: 'I call this guy Jack',
      imgSrc: require('../../../assets/Dragonflies/three.jpg'),
      imgThumbSrc: require('../../../assets/Dragonflies/three-thumb.jpg')
    },
    {
      title: 'Dragon Four',
      link: 'https://www.flickr.com/photos/swallowtailgardenseeds/15804399018/',
      description: 'Dis is also a Damselfly, I like it\'s tail',
      imgSrc: require('../../../assets/Dragonflies/four.jpg'),
      imgThumbSrc: require('../../../assets/Dragonflies/four-thumb.jpg')
    },
    {
      title: 'Dragon Five',
      link: 'https://www.flickr.com/photos/58700225@N04/21484744774/',
      description: 'RED BEAUTY',
      imgSrc: require('../../../assets/Dragonflies/five.jpg'),
      imgThumbSrc: require('../../../assets/Dragonflies/five-thumb.jpg')
    },
    {
      title: 'Dragon Six',
      link: 'https://www.flickr.com/photos/sohura/27140013243/',
      description: 'Look at those wings!',
      imgSrc: require('../../../assets/Dragonflies/six.jpg'),
      imgThumbSrc: require('../../../assets/Dragonflies/six-thumb.jpg')
    }
  ]
}


//
