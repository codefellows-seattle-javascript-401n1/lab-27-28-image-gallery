'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('displayList', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./display-list.html'),
    scope: {
      desc: '@',
      title: '@'
    }
  };
});
