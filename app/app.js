'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.section1',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
