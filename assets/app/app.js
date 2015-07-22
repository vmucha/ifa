
 var app = angular.module('ifa', ["ui.router"])
    app.config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider, $urlRouterProvider,$locationProvider){
      $locationProvider.html5Mode(true);
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/")
      
      $stateProvider
        .state('start', {
            url: "/",
            templateUrl: "views/start.ejs",
            controller:'StartController'
        })
        .state('glossar', {
            url: "/glossar/:category",
            templateUrl: "views/overview.ejs",
            controller: 'OverviewController'
        })
        .state('glossar.article',{
            url: "/:articleId",
            templateUrl: "views/article.ejs",
            controller: 'ArticleController'
        })
        
    }]);