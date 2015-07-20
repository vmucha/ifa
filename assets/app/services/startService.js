app.service('startService', ['$rootScope','$http',function ($rootScope, $http) {

    function listCategories(callback){ 
      console.log("get cat");
      $http({ 
        url: "api/v1/categories",
        method: 'GET',
        cache:true
      }).success(function (data) {
        console.log("success api cat");
        callback(data);  
      });
    }

    return {
      listCategories: function (callback) {
        listCategories(callback);
      }
    };
}]);
