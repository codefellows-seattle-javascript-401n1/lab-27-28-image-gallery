'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('appText', function(){
  return {
    restrict: 'E',
    replace: true,
    controller: 'AppTextController',
    controllerAs: 'appTextCtrl',
    bindToController: true,
    scope: {
      image: '='
    },
    template: require('./app-text.html')
  };
});
