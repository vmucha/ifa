app.directive("articleCards",[function ($scope) {
	return {
		restrict:"EA",
    scope:false,
		//replace:true,
		template:'<li on-last-repeat class="articleCard col-sm-6 col-md-4 col-lg-3" ng-repeat="article in articles"><div class="card"><a class="original" href="{{article.url}}">Original</a><a ui-sref="glossar.article({articleId:{{article.id}},category:\'{{category}}\'})"><h4>{{article.kicker}}</h4><h3>{{article.title}}</h3><img ng-src="{{article.teaserImage}}"/></a></div></li>'
		
        	//$timeout(scope.resize, 0);  //Calling a scoped method
        	

        	           // $('.grid').masonry({
  // options
  //itemSelector: '.articleCard',
  //columnWidth: '.articleCard'
   // });
    	
	}

}]);

