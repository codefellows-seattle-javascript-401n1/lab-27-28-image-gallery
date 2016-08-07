'use strict';

const angular = require('angular');

angular.module('imageGallery').controller('AppModalImageController', [
  '$scope',
  '$log',
  AppModalImageController
]);

function AppModalImageController($scope, $log) {
  this.image = {};
  this.updateImageWithData = function(image) {
    if (typeof image === 'object' && typeof this.image == 'object') {
      Object.keys(this.image).forEach( (key) => {
        if (image[key]) {
          this.image[key] = image[key];
        }
      });
    }
  };
  this.initialize = function initialize() {
    $log.warn('THIS IS THE IMAGE: ', $scope.image);
  };
}
