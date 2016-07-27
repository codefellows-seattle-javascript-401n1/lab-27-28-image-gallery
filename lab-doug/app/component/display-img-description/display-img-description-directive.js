'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('displayImgDescription', function(){
//return an objhect that configures the directives functionality.
  return {
    restrict: 'E',
    template: require('./display-img-description.html')
  }
});
