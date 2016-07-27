'use strict';

const angular = require('angular');

angular.module('galleryApp').directive('displayImgDescription', function(){
/*when declaring directive, you use camelCase. When displayed in html the directives name is ka-bob case.  Below, we return an object that CONFIGURES the directives functionality.*/
  return {
    restrict: 'E',

    /**
     * by setting replace to true we replace the directive tags that are inserted into the html dynamically with the tags included in this directives html file.  You will not see the directive element listed under elements in the DOM.
     */
    replace: true,

    /**
     * This is islet scope.  It is a scope that only exists within this directive.  It does not inherit visibility into its parents.  You cannot add properties to the islet scope.  If you want the directive to inherit scope froom its parent, you would replace the scope statement below with "scope: true,"
     */
    scope: {

    },

    controller: 'DisplayImgDescriptionController',
    controllerAs: 'displayImgDescCtrl',

    /**
     * we are binding the controller and the directive scopes to be the same.    
     */
    bindToController: true,

    /**
     * the template statement below will cause the html template to be added, by the html-loader to the BUILD in the form of a string and it will return the html template/string.  An advantage of including all the templates in the build is that it requires a single download by the client instead of multiple ajax calls for each template stored on the server.  You will know that the individual ajax calls are being made if "templateUrl" is used in place of "template" below.
     */
    template: require('./display-img-description.html')
  };
});
