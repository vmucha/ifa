app.controller('ArticleController', ['$scope','articleService','$stateParams','$sce',function ($scope,articleService,$stateParams,$sce) {
    $scope.content = [];
    $scope.paragraphs = [];
    $scope.body = "";
    $scope.headline = "";
    $scope.intro = "";
    $scope.articleType = "";
    $scope.prepareOverlay = function(id) {
        articleService.getContent(articleId,function(data){
            $scope.content = data[0];
            for(var i=0;i<data[0].paragraphs.length;i++) {
                for(var u=0;u<data[0].paragraphs[i].parts.length;u++) {
                    $scope.paragraphs.push(data[0].paragraphs[i].parts[u]);    
                }
               $scope.body += data[0].paragraphs[i].content;
               console.log("body",$scope.body);
            }
        });
    };
    var articleId = $stateParams.articleId
    console.log(articleId);
//var articleId = 144213754;
    function init() { 
        console.log("init art");
        articleService.getContent(articleId,function(data){
            console.log("cb2 art",data);
            //$scope.content = getRaw(data[0].paragraphs[0].parts[1].content);
            
            var data = data[0];
            $scope.content = data;
            $scope.articleType = data.type;
            $scope.headline = data.title;
            $scope.intro = data.intro;
            $scope.kicker = data.kicker;
            for(var i=0;i<data.paragraphs.length;i++) {
                for(var u=0;u<data.paragraphs[i].parts.length;u++) {
                    $scope.paragraphs.push(data.paragraphs[i].parts[u]);    
                }
                $scope.body += data.paragraphs[i].openinigTag+data.paragraphs[i].content+data.paragraphs[i].openinigTag.replace("<","</");
            }
            console.log("body",$scope.body);
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
