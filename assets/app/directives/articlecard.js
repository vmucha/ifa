app.directive("articleCard",['$timeout',function ($timeout) {
	return {
		restrict:"E",
		replace:true,
		template:'<li on-last-repeat class="articleCard col-sm-6 col-md-4 col-lg-3" ng-repeat="article in articles"><div class="card"><a class="original" href="{{articles.url}}">Original</a><a href="article/{{article.id}}/"><h4>{{article.kicker}}</h4><h3>{{article.title}}</h3><img ng-src="{{article.teaserImage}}"/></a></div></li>'
		
        	//$timeout(scope.resize, 0);  //Calling a scoped method
        	

        	           // $('.grid').masonry({
  // options
  //itemSelector: '.articleCard',
  //columnWidth: '.articleCard'
   // });
    	
	}

}]);

