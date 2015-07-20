var app = angular.module("ifa",['ngRoute','ngSanitize']);

app.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
  $locationProvider.html5Mode({enabled:true,  requireBase: true});
      $locationProvider.hashPrefix('!');

  $routeProvider
      .when('/',
      {
        templateUrl:'views/start',
        controller:'StartController'
      })
      .when('/article/:id',
      {
        templateUrl:'views/article',
        controller:'ArticleController'
      })
      .when('/glossar/:name',
      {
        templateUrl: 'views/overview',
        controller: 'OverviewController'
      })
      .when('/star/:starID', 
          {
              controller: 'showStarController',
              templateUrl: '/views/star'
          })
      .otherwise({ redirectTo: '/' });
}]);
