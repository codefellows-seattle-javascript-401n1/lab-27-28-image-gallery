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

  this.images = [
    {
      title: 'Dragon One',
      description: 'top-down veiw on dis beauty',
      imgSrc: require('../../../assets/Dragonflies/one.jpg'),
      imgThumbSrc: require('../../../assets/Dragonflies/one-thumb.jpg')
    },
    {
      title: 'Dragon Two',
      description: 'technically dis is a damselfly, see how it can fold it\'s wings',
      imgSrc: require('../../../assets/Dragonflies/two.jpg'),
      imgThumbSrc: require('../../../assets/Dragonflies/two-thumb.jpg')
    },
    {
      title: 'Dragon Three',
      description: 'I call this guy Jack',
      imgSrc: require('../../../assets/Dragonflies/three.jpg'),
      imgThumbSrc: require('../../../assets/Dragonflies/three-thumb.jpg')
    },
    {
      title: 'Dragon Four',
      description: 'Dis is also a Damselfly, I like it\'s tail',
      imgSrc: require('../../../assets/Dragonflies/four.jpg'),
      imgThumbSrc: require('../../../assets/Dragonflies/four-thumb.jpg')
    },
    {
      title: 'Dragon Five',
      description: 'RED BEAUTY',
      imgSrc: require('../../../assets/Dragonflies/five.jpg'),
      imgThumbSrc: require('../../../assets/Dragonflies/five-thumb.jpg')
    },
    {
      title: 'Dragon Six',
      description: 'Look at those wings!',
      imgSrc: require('../../../assets/Dragonflies/six.jpg'),
      imgThumbSrc: require('../../../assets/Dragonflies/six-thumb.jpg')
    }
  ]
}


//
