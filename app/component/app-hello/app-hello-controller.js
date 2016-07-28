'use strict';

const angular = require('angular');

angular.module('appGallery')
.controller('AppHelloController', [AppHelloController]);

function AppHelloController() {
  this.name = 'content should show string';

}
