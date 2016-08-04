'use strict';

const angular = require('angular');

angular.module('imageGallery')
.directive('appModalEditForm', function(){
  return {
    restrict: 'E',
    replace: 'true',
    scope: {
      showImage: '&'
    },
    template: require('./app-modal-edit-form.html')
  };
});
