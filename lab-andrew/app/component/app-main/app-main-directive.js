'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appMain', function(){
  return  {
    restrict: 'E',
    replace: true,
    scope: {
      imageModal: '='
    },
    template: require('./app-main.html'),
    controller: 'AppMainController',
    controllerAs: 'appMainCtrl',
    bindToController: true
  };
});
