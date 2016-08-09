'use strict';

const angular = require('angular');
angular.module('galleryApp')
.factory('editImageComponent', function(){
  const newTitle = [];
  const editTitle = function(title){
    this.newTitle.push(title);

    this.newTitle = newTitle.filter((title) =>{
      return true;
      if(newTitle===title) return false;
    });
  };
  return {
    newTitle,
    editTitle
  };
});
