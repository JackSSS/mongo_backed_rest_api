require('angular/angular');
var angular = window.angular;

var ninjaApp = angular.module('ninjaparty', []);
ninjaApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Ninja Out!';

  $scope.alertGreeting = function() {
    alert($scope.greeting);
  };
}]);
