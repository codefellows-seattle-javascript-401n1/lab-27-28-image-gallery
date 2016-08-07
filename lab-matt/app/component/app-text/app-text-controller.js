'use strict';

const angular = require('angular');

angular.module('demoApp')
.controller('AppTextController', [AppTextController]);

function AppTextController(){
  this.updateImage = function(image){
    console.log('Hit updateImage', image);
    if (image.name) this.image.name = image.name;
    if (image.imageUrl) this.image.link = image.imageUrl;
  };
}
