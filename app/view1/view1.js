'use strict';

angular.module('planechaseApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'MainViewCtrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);
