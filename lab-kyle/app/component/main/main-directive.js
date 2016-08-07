'use strict';

require('angular').module('demoApp')
.directive('appMain', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    controller: 'MainController',
    controllerAs: 'mainCtrl',
    bindToController: true,
    template: require('./main.html')
  };
});
