'use strict';

// Declare app level module which depends on views, and components
angular.module('planechaseApp', [
  'ngRoute',
  'planechaseControllers',
  'angularModalService'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
    templateUrl:'view1/view1.html',
    controller:'MainViewCtrl'
  });
}]);
