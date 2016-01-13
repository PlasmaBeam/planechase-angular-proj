'use strict';

var phonecatApp = angular.module('planechaseControllers', []);

phonecatApp.controller('MainViewCtrl', function ($scope) {

  $scope.currentImageCounter = 0;

  $scope.startUp = function(){
    $scope.currentImageCounter = 0;
    $scope.imgList = [];
    for(var i = 1; i < 83; i++){
      $scope.imgList.push(i);
    }
    $scope.imgList = shuffle($scope.imgList);
    $scope.mainImageUrl = "resources/imgs/PCP/" + $scope.imgList[0] + ".jpg";
  }

  $scope.nextImage = function() {
    if($scope.imgList != undefined){
      $scope.counter = 0;
      getNextCard();
      $scope.mainImageUrl = "resources/imgs/PCP/" + $scope.imgList[0] + ".jpg";
    }else{
      alert("Please press the Start! button before.");
    }
  };

  $scope.previousImage = function(){
    if($scope.imgList != undefined){
      $scope.counter = 0;
      getPreviousCard();
      $scope.mainImageUrl = "resources/imgs/PCP/" + $scope.imgList[0] + ".jpg";
    } else{
      alert("Please press the Start! button before.");
    }
  }

  $scope.alertMessage = function(message) {
    alert(message);
  }

  $scope.plusButtonPress = function(){
    $scope.counter++;
  }

  $scope.minusButtonPress = function(){
    if($scope.counter > 1){
      $scope.counter--;
    }else{
      $scope.counter = 0;
    }
  }

  $scope.openDialog = function(){

  }

  $scope.mainImageUrl = "resources/imgs/basewp2.jpg";
  $scope.message = "There is no spoon";
  $scope.counter = 0;

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function getNextCard(){
    var aux = $scope.imgList.shift($scope.imgList);
    $scope.imgList.push(aux);
    // $lClass = LogicClass::Instance();
    // $lClass->effectSorter($scope.imgList[0]);
    return $scope.imgList;
  }

  function getPreviousCard(){
    var aux = $scope.imgList.pop($scope.imgList);
    $scope.imgList.reverse();
    $scope.imgList.push(aux);
    $scope.imgList.reverse();
    return $scope.imgList;
  }

  function effectSorter(triggerNumber){
    switch (triggerNumber){
      case 25 :

        break;
      case 51:

        break
      case 62:
      
        break;
    }
  }

  function checkIsNotPhen(cardNumber){
    // Returns false if the card is not a phenomenon;
    var phenArray = [9, 25, 37, 40, 50, 55, 62, 76];
    if(phenArray.indexOf(cardNumber) == -1){
        return true;
    }
    return false;
  }

});
