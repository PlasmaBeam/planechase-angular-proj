'use strict';

var phonecatApp = angular.module('planechaseApp', []);

phonecatApp.controller('MainViewCtrl', function ($scope) {

  var imageBoolean = false;
  $scope.currentImage = 1;
  $scope.imgList = [];
  for(var i = 1; i < 83; i++){
    $scope.imgList.push(i);
  }

  $scope.setImage = function() {
    if(imageBoolean){
      $scope.mainImageUrl = "resources/imgs/basewp2.jpg";
      imageBoolean = false;
    }else{
      $scope.mainImageUrl = "resources/imgs/basewp.jpg";
      imageBoolean = true;
    }
  };
  $scope.nextImage = function() {
    if(!imageBoolean){
      $scope.mainImageUrl = "resources/imgs/PCP/1.jpg";
      imageBoolean = true;
    }else{
      if($scope.currentImage < 82){
        $scope.currentImage = $scope.currentImage + 1;
        $scope.mainImageUrl = "resources/imgs/PCP/" + $scope.currentImage + ".jpg";
      }else{
        $scope.currentImage = 1;
        $scope.mainImageUrl = "resources/imgs/PCP/" + $scope.currentImage + ".jpg";
      }
    }
  };

  $scope.mainImageUrl = "resources/imgs/basewp.jpg";
  $scope.message = "There is no spoon";



});
