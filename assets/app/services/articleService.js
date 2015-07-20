app.service('articleService', ['$rootScope','$http',function ($rootScope, $http) {

    function getContent(id,callback){ 
      $http({ 
        url: "api/v1/article/"+id,
        method: 'GET'
      }).success(function (data) {
        console.log("success api artikel");
        callback(data);  
      });
    }

    return {
      getContent: function (id,callback) {
        getContent(id,callback);
      }
    };
}]);
