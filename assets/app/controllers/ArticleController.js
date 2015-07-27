app.controller('ArticleController', ['$scope','articleService','$stateParams','$sce',function ($scope,articleService,$stateParams,$sce) {
    $scope.content = [];
    $scope.paragraphs = [];
    $scope.body = "";
    $scope.headline = "";
    $scope.intro = "";
    $scope.articleType = "";
    $scope.loaded = false;

    var articleId = $stateParams.articleId;
    console.log(articleId);

    function init() { 
        console.log("init art");
        articleService.getContent(articleId,function(data){
            console.log("cb2 art",data);
            var data = data[0];
            $scope.content = data;
            $scope.articleType = data.type;
            $scope.headline = data.title;
            $scope.intro = data.intro;
            $scope.kicker = data.kicker;
            $scope.paragraphs = data.processedParagraphs;
            $scope.body = data.body;
            $scope.loaded = true;
        });
    }
    init();
     $scope.to_trusted = function(html_code) {
        return $sce.trustAsHtml(html_code);
    };
}]);
