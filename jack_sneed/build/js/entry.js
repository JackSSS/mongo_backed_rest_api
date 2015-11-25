require('angular/angular');
var angular = window.angular;

var ninjaApp = angular.module('ninjastream', []);
ninjaApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Ninja Out!';

  $scope.alertGreeting = function() {
    alert($scope.greeting);
  };
}]);
