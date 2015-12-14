require('angular/angular');
require('angular-route');
var angular = window.angular;

var ninjaApp = angular.module('NinjaApp', ['ngRoute']);
require('./filters/filters')(ninjaApp);
require('./services/services')(ninjaApp);
require('./directives/directives')(ninjaApp);
require('./ninjas/ninjas')(ninjaApp);

ninjaApp.config(['$routeProvider', function($route) {
  $route
    .when('/ninja', {
      templateUrl: '/templates/ninjas_main.html',
      controller: 'NinjasController'
    })
    .otherwise({
      redirectTo: '/ninja'
    })
}]);
