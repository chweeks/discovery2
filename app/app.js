'use strict';

angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'section1/view1.html',
    controller: 'Section1Ctrl as S1Ctrl'
  });
  $routeProvider.when('/view2', {
    templateUrl: 'section1/view2.html',
    controller: 'Section1Ctrl as S1Ctrl'
  });
  $routeProvider.when('/view3', {
    templateUrl: 'section1/view3.html',
    controller: 'Section1Ctrl as S1Ctrl'
  });
  $routeProvider.when('/view4', {
    templateUrl: 'section1/view4.html',
    controller: 'Section1View4Ctrl as S1V4Ctrl'
  });
  $routeProvider.when('/view5', {
    templateUrl: 'section1/view5.html',
    controller: 'Section1Ctrl S1Ctrl'
  });
  $routeProvider.otherwise({redirectTo: '/view1'});
}])

.controller('Section1Ctrl', [function() {

  this.hiddenStackedBars = true;
  this.isCollapsed = true;

}])

.controller('Section1View4Ctrl', [function() {

  var colors = ["rgb(142, 173, 227)", "rgb(89, 148, 228)", "rgb(22, 50, 98)"];

  var updateColors = function(barChart, colors) {
    barChart.datasets[0].bars[0].fillColor = colors[0];
    barChart.datasets[0].bars[1].fillColor = colors[1];
    barChart.datasets[0].bars[2].fillColor = colors[2];
    barChart.update();
  };

  var barChart1Data = {
    labels: [
              "Catch-up or on-demand television",
              "Streaming television through a subscription service",
              "Live Television"
            ],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(22, 50, 98, 1)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [38, 56, 66]
      },
    ]
  };

  var barChart2Data = {
    labels: ["","",""],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(22, 50, 98, 1)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [41, 63, 53]
      },
    ]
  };

  var barChart3Data = {
    labels: ["","",""],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(22, 50, 98, 1)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [37, 52, 69]
      },
    ]
  };

  var barChart4Data = {
    labels: ["","",""],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(22, 50, 98, 1)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [36, 41, 76]
      },
    ]
  };

  var ctx1 = document.getElementById("barChart1").getContext("2d");
  var barChart1 = new Chart(ctx1).HorizontalBar(barChart1Data, {showScale: false});
  var ctx2 = document.getElementById("barChart2").getContext("2d");
  var barChart2 = new Chart(ctx2).HorizontalBar(barChart2Data, {showScale: false});
  var ctx3 = document.getElementById("barChart3").getContext("2d");
  var barChart3 = new Chart(ctx3).HorizontalBar(barChart3Data, {showScale: false});
  var ctx4 = document.getElementById("barChart4").getContext("2d");
  var barChart4 = new Chart(ctx4).HorizontalBar(barChart4Data, {showScale: false});

  updateColors(barChart1, colors);
  updateColors(barChart2, colors);
  updateColors(barChart3, colors);
  updateColors(barChart4, colors);

  this.hiddenBarCharts = true;
}]);
