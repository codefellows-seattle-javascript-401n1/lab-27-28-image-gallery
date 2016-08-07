'use strict';

const angular = require('angular');

(function() {
  angular.module('demoApp')
    .controller('AppGalleryController', [
      '$log',
      '$scope',
      AppGalleryController
    ]);

  function AppGalleryController($log, $scope){
    this.initialize = initialize;
    this.updateImage = function(image){
      Object.keys(this.image).forEach(key => {
        if(image[key]) this.image[key] = image[key];
      });
    };
    function initialize() {
      $log.warn('AppMainController initialize, imageUrl: ', this.image);
    }
  }

})();
