/**
 * Created by KIMAMBM on 15.05.2015.
 */
"use strict";

angular.module('mkFramework').directive("mkFramework", function(){

  return{
    transclude: true,
    scope: {
      title: "@",
      subtitle: "@",
      logo: "@"
    },
    controller: "mkFrameworkController",
    templateUrl: "modules/mkFramework/views/mkFrameworkTemplate.html"
  };
});
