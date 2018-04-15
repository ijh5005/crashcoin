'use strict';

var app = angular.module('app', []);

app.controller('ctrl', ['$rootScope', '$scope', '$interval', '$timeout', 'task', function($rootScope, $scope, $interval, $timeout, task){
  $scope.coinCrashes = 1;

  $scope.incrementCoin = () => {
    const isPhonePress = task.isPhonePress();
    if(!isPhonePress){ return null }
    $scope.coinCrashes++;
  }
}]);

//task service
app.service('task', function($rootScope, $interval, $timeout){
  this.isPhonePress = () => {
    const screenWidth = $('body').width();
    const phonePress = (screenWidth < 1000) ? true : false;
    return phonePress;
  }
});
