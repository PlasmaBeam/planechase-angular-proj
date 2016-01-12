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
    $scope.startUp = function(){

    }

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  }
};

$scope.mainImageUrl = "resources/imgs/basewp.jpg";
$scope.message = "There is no spoon";



});
