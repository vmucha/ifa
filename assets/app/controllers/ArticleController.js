app.controller('ArticleController', ['$state','$scope','articleService','$stateParams','$sce',function ($state,$scope,articleService,$stateParams,$sce) {
    $scope.content = [];
    $scope.paragraphs = [];
    $scope.body = "";
    $scope.headline = "";
    $scope.intro = "";
    $scope.articleType = "";
    $scope.loaded = false;
    var articleId = $stateParams.articleId;
    $scope.iframeURL = $sce.trustAsResourceUrl("http://www.welt.de/"+articleId+"?config=responsiveiframe&a=false&noredirect=true");
    console.log(articleId);

    function init() { 
        console.log("init art");
        articleService.getContent(articleId,function(data){
            console.log("cb2 art");
            $scope.content = data;
            $scope.articleType = data.type;
            $scope.headline = data.title;
            $scope.intro = data.intro;
            $scope.kicker = data.kicker;
            $scope.paragraphs = data.paragraphs;
            $scope.body = data.body;
            $scope.loaded = true;
            showPopup();
        });
    }
    function showPopup() {
         $('.overlay').popup({
            autoopen: true,
            type: 'overlay',
            scrolllock: true,
            color: '#000',
            opacity: 0.8,
            autozindex: false,
            detach: true,
            //transition: 'all 0.5s',
            closeelement: '.js-overlay-close',
            vertical: 'top',
            keepfocus: true,
             onclose: function () {
                 console.log('waff');
                 $state.go('^');
             }
        });
    }
    init();
     $scope.to_trusted = function(html_code) {
        return $sce.trustAsHtml(html_code);
    };
}]);
