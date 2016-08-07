'use strict';

const angular = require('angular');

angular.module('demoApp')
  .controller('AppMainController', [
    '$log',
    '$scope',
    AppMainController
  ]);

function AppMainController($log, $scope){
  this.images = [];
  // this.initialize = initialize;
  this.addImage = function(image){
    $log.debug('AppMainController addImage', image);
    if(typeof image === 'object' && image.title && image.imageUrl){
      this.images.push(image);
    }
  };

}
