'use strict';

angular.module('myApp.section1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'section1/view1.html',
    controller: 'Section1Ctrl'
  });
  $routeProvider.when('/view2', {
    templateUrl: 'section1/view2.html',
    controller: 'Section1Ctrl'
  });
  $routeProvider.when('/view3', {
    templateUrl: 'section1/view3.html',
    controller: 'Section1Ctrl'
  });
  $routeProvider.when('/view4', {
    templateUrl: 'section1/view4.html',
    controller: 'Section1Ctrl'
  });
  $routeProvider.when('/view5', {
    templateUrl: 'section1/view5.html',
    controller: 'Section1Ctrl'
  });
}])

.controller('Section1Ctrl', [function() {

  this.hiddenStackedBars = true;
}]);
