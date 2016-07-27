'use strict';

require('angular');

angular.module('galleryApp').controller('DisplayImgDescriptionController',[DisplayImgDescriptionController]);

function DisplayImgDescriptionController(){
  this.name = 'content from the controller';
}
