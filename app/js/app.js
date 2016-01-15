'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('planechaseApp', [
  'ngRoute',
  'planechaseControllers',
  'angularModalService',
  'ngAnimate'
]);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
    templateUrl:'view1/view1.html',
    controller:'MainViewCtrl'
  });
}]);

app.service('SharedDataService', function () {
  var sharedData = {};
  sharedData = {};
  return sharedData;
});
