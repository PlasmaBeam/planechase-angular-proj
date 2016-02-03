'use strict';

var app = angular.module('planechaseControllers', ['angularModalService', 'ngAnimate']);

app.controller('MainViewCtrl', ['$scope', 'ModalService', 'SharedDataService', function($scope, ModalService, SharedDataService) {

  $scope.currentImageCounter = 0;
  $scope.mainImageUrl = "resources/imgs/basewp2.jpg";
  $scope.counter = 0;
  $scope.sharedData = SharedDataService;
  $scope.overFlowBoolean = false;

  $scope.startUp = function(){
    $scope.counter = 0;
    $scope.currentImageCounter = 0;
    $scope.imgList = [];
    for(var i = 1; i < 83; i++){
      $scope.imgList.push(i);
    }
    $scope.imgList = shuffle($scope.imgList);
    $scope.sharedData.imgList = $scope.imgList;
    $scope.mainImageUrl = "resources/imgs/PCP/" + $scope.imgList[0] + ".jpg";
    $scope.sharedData.mainImageUrl = $scope.mainImageUrl;
  }

  $scope.nextImage = function() {
    if($scope.imgList != undefined){
      $scope.counter = 0;
      getNextCard();
      $scope.mainImageUrl = "resources/imgs/PCP/" + $scope.imgList[0] + ".jpg";
    }else{
      alert("Please press the Start! button before.");
    }
  }

  $scope.previousImage = function(){
    if($scope.imgList != undefined){
      $scope.counter = 0;
      getPreviousCard();
      $scope.mainImageUrl = "resources/imgs/PCP/" + $scope.imgList[0] + ".jpg";
    } else{
      alert("Please press the Start! button before.");
    }
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
    effectSorter($scope.imgList[0]);
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
        effect25();
        break;
      case 51:
        effect51();
        break
      case 62:
        effect62();
        break;
    }
  }

  function effect25(){

    var arrayRes = [];
    var i = 1;
    while(i < 6){
        if(checkIsNotPhen($scope.imgList[i])){
          arrayRes.push($scope.imgList[i]);
          i++;
        }else{
          var aux = $scope.imgList.shift();
          $scope.imgList.push(aux);
        }
    }
    $scope.sharedData.dataArray = arrayRes;
    $scope.openDialog("popups/effect25.html");
    $scope.overFlowBoolean = false;
  }

  function effect51(){
    var arrayRes = [];
    var i = 1;
    while(i < 4){
          var aux = $scope.imgList.shift();
          $scope.imgList.push(aux);
          arrayRes.push(aux);
          i++;
    }
    $scope.sharedData.dataArray = arrayRes;
    $scope.openDialog("popups/effect51.html");
    $scope.overFlowBoolean = false;
  }

  function effect62(){
    var arrayRes = [];
    var i = 1;
    while(i < 3){
        if(checkIsNotPhen($scope.imgList[i])){
          arrayRes.push($scope.imgList[i]);
          i++;
        }else{
          var aux = $scope.imgList.shift();
          $scope.imgList.push(aux);
        }
    }
    $scope.sharedData.dataArray = arrayRes;
    $scope.openDialog("popups/effect62.html");
    $scope.overFlowBoolean = false;
  }

  function checkIsNotPhen(cardNumber){
    // Returns true if the card is not a phenomenon;
    var phenArray = [9, 25, 37, 40, 50, 55, 62, 76];
    if(phenArray.indexOf(cardNumber) == -1){
        return true;
    }
    return false;
  }

  $scope.openDialog = function(templateURL) {
    ModalService.showModal({
      templateUrl: templateURL,
      controller: "PopupController"
    }).then(function(modal) {
      modal.close.then(function() {
        $scope.overFlowBoolean = true;
      });
    });
  };

  $scope.overFlowProperty = function(){
    if(!$scope.overFlowBoolean){
      return {"overflow": "visible"};
    }else{
      return {"overflow": "hidden"};
    }
  }
}]);

app.controller('PopupController', ['$scope', 'close', 'SharedDataService', function($scope, close, SharedDataService) {
  $scope.sharedData = SharedDataService;
  $scope.close = function() {
    close();
  }
  $scope.keypress = function(keyEvent) {
    if (keyEvent.which === 13 || keyEvent.which === 27)
      close();
  }

  $scope.effect25Choice = function(choice){
    /*
      Parameters: choice = int of the chosen plane from the list of 5 in dataArray
      Function: Sort through the 5 planes in dataArray and move them to the bottom of the main imgList
    */
    for(var i = 0; i < $scope.sharedData.dataArray.length; i++){ //dataArray is the array of 5 planes
      var aux = $scope.sharedData.dataArray[i];
      if(aux != choice){
        var j = 0;
        while(j < 4){
          var aux = $scope.sharedData.imgList.shift($scope.sharedData.imgList);
          $scope.sharedData.imgList.push(aux);
        }
      }
    }
    $scope.sharedData.mainImageUrl = $scope.sharedData.imgList[0];
    //console.log(choice);
  }
}]);
