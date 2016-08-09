'use stirct';

const angular = require('angular');
angular.module('galleryApp')
.directive('appModalImage', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./modal-image.html'),
    controller: 'ModalImageController',
    controllerAs: 'modalImageCtrl',
    bindToController: true,
    scope: {
      image: '=',
      close: '&'
    }
  };
});
