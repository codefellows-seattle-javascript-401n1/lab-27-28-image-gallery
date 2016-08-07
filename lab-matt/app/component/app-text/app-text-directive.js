'use strict';

const angular = require('angular');

angular.module('demoApp')
.directive('appText', function(){
  return {
    restrict: 'E',
    replace: true,
    controller: 'AppTextController',
    controllerAs: 'appTextCtrl',
    bindToController: true,
    scope: {
      image: '=',
      showImage: '&'
    },
    template: require('./app-text.html')
  };
});
