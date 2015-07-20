app.controller('ArticleController', ['$scope','articleService','$routeParams','$sce',function ($scope,articleService,$routeParams,$sce) {
    $scope.content = [];
    $scope.paragraphs = [];
    var articleId = $routeParams.id;

    function init() { 
        console.log("init art");
        articleService.getContent(articleId,function(data){
            console.log("cb2 art");
            //$scope.content = getRaw(data[0].paragraphs[0].parts[1].content);
            $scope.content = data[0];
            for(var i=0;i<data[0].paragraphs.length;i++) {
                for(var u=0;u<data[0].paragraphs[i].parts.length;u++) {
                    $scope.paragraphs.push(data[0].paragraphs[i].parts[u]);    
                }
            }
            console.log($scope.paragraphs);
        });
    }
    init();
     $scope.to_trusted = function(html_code) {
        return $sce.trustAsHtml(html_code);
    };
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
