app.controller('StartController', ['$scope','startService',function ($scope,startService) {
    $scope.cat = [];
    function init() { 
        console.log("init cat");
        startService.listCategories(function(data){
            console.log("cb2 cat");
            $scope.cat = data;
        });
    }
    init();
  
    /*$scope.articles = {};
    $scope.loadArticles = {loading: true};

    function init() { 

        overviewService.listArticles(function(data){
            $scope.loadArticles.loading = false;
            for(var i=0;i<data.length;i++) {
                //data[i].teaserImage = data[i].teaserImage.replace("w1-h1","w400-h400-oo");
            }
            $scope.articles = data;
        });
        console.log("init");
    }
    //init();*/
}]);
