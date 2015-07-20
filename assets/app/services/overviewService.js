app.service('overviewService', ['$rootScope','$http',function ($rootScope, $http) {

    function listArticles(categoryName,callback){ 
      $http({ 
        url: "api/v1/overview/"+categoryName,
        method: 'GET',
        cache:true
      }).success(function (data) {
        console.log("success api");
        callback(data);  
      });
    }

    return {
      listArticles: function (categoryName,callback) {
        listArticles(categoryName,callback);
      }
    };
}]);
