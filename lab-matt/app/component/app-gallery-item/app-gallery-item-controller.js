'use strict';

const angular = require('angular');

angular.module('demoApp')
.controller('AppGalleryItemController', [AppGalleryItemController]);

function AppGalleryItemController() {
  this.showThumb = false;
  this.showText = true;
  this.showFull = false;
  this.displayModalImage = false;
  this.defaultImage = 'http://static.nautil.us/7515_a3c36d0c741ddabbdb44b35a4fbebcb4.png';




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

  this.thumbFunc = function() {
    console.log('Hit thumbFunc');
    this.showThumb = true;
    this.showText = false;
    this.showFull = false;
  };
  this.textFunc = function() {
    console.log('Hit textFunc');
    this.showThumb = false;
    this.showText = true;
    this.showFull = false;
  };
  this.fullFunc = function(){
    console.log('Hit fullFunc');
    this.showThumb = false;
    this.showText = false;
    this.showFull = true;
  };


  this.showModalImage = function(imageUrl){
    console.log('Hit ShowModalImage, imageUrl:', imageUrl);
    this.displayImageUrl = imageUrl || this.defaultImage;
    console.log(this.displayImageUrl);
    this.displayModalImage = true;
    console.log(this.displayModalImage);
  };

  this.hideModalImage = function() {
    console.log('hello from hideModalImage!');
    this.displayModalImage = false;
  };
  this.updateImage = function(image){
    console.log('Hit updateImage', image);
    Object.keys(image).forEach(key => {
      console.log(image[key]);
      if(image[key]) this.image[key] = image[key];
    });
  };
}
