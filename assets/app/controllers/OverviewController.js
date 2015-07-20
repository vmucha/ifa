app.controller('OverviewController', ['$scope', '$location','overviewService','$routeParams',function ($scope, $location,overviewService,$routeParams) {
    $scope.articles = {};
    $scope.loadArticles = {loading: true};
    var categoryName = $routeParams.name;
    console.log($routeParams);
    function init() { 

        overviewService.listArticles(categoryName,function(data){
            $scope.loadArticles.loading = false;
            $scope.articles = data;
        });
        console.log("init");
    }
    init();

 $scope.$on('onRepeatLast', function(scope, element, attrs){
          //work your magic

            var $grid = $('.grid').masonry({
                    itemSelector: '.articleCard',
                    columnWidth: '.articleCard'
                });

            $grid.imagesLoaded().progress( function() {
            $grid.masonry('layout');
});
      });

}]);
