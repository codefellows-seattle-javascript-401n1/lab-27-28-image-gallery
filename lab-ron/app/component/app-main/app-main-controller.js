
'use strict';

const angular = require('angular');

angular.module('demoApp').controller('AppMainController', [AppMainController]);

function AppMainController(){
  this.images = [];
  this.addImage = function(image){
    if (typeof image === 'object' && image.title && image.imageUrl){
      this.images.push(image);
    }
  };
}
