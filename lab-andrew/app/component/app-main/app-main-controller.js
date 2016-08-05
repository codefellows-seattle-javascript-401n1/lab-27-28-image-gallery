
'use strict';

const angular = require('angular');
angular.module('galleryApp').controller('AppMainController', [AppMainController]);

function AppMainController(){
  this.displayModalImage = false;

  this.showModalImage = function(imageUrl){
    this.diplayImage = imageUrl || 'http://blog.folioacademy.com/wp-content/uploads/2014/02/TrollSketch01-300x256.jpg';
    this.displayModalImage = true;
  };

  this.hideModalImage = function(){
    this.displayModalImage = false;
  };
}
