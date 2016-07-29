'use strict';

const angular = require('angular');

angular.module('imageGallery')
.directive('appMain', function(){
  return {
    restrict: 'E',
    replace: true,
    controller: 'AppMainController',
    controllerAs: 'appMainCtrl',
    template: require('./app-main.html'),
    scope: {}
  };
});
