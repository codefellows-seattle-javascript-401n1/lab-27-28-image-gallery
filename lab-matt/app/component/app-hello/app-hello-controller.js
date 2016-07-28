'use strict';

const angular = require('angular');

angular.module('demoApp')
.controller('AppHelloController', [AppHelloController]);

function AppHelloController(name, description, link){
  this.name = name;
  this.description = description;
  this.link = link;
  console.log('test');
  console.log(this.name);
}
