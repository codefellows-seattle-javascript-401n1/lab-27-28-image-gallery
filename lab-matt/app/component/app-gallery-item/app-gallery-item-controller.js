'use strict';

const angular = require('angular');

angular.module('demoApp')
.controller('AppGalleryItemController', [AppGalleryItemController]);

function AppGalleryItemController() {
  this.images = [
    {
      name: 'Dog Programmer',
      description: 'How we all fell at one point',
      link: 'http://www.smartfile.com/blog/wp-content/uploads/2013/06/dog.jpg'
    },
    {
      name: 'Science Dog Programmer',
      description: 'Programmers with a CS degree',
      link: 'http://s2.quickmeme.com/img/c1/c16c94b2aa0b5deaf6e6ff04f117c665c1edde074d751383adf02d184941e4c0.jpg'
    },
    {
      name: 'Coffee Dog Programmer',
      description: 'Always remember your coffee!',
      link: 'https://i.ytimg.com/vi/0bSPTYExyBM/hqdefault.jpg'
    },
    {
      name:'Corgi Programmer',
      description:'A very smart looking programmer',
      link:'https://hackbrightacademy.com/content/uploads/2016/01/puppy-coding.jpg'
    }

  ],
  this.showValue = false,
  this.showToggle = function(){
    if(this.showValue !== false){
      this.showValue = false;
      return;
    } else {
      this.showValue = true;
      return;
    }
  };
}
