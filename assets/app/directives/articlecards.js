app.directive("articleCards",function () {
	return {
		restrict:"EA",
    scope:false,
		//replace:true,
    template: '<div ng-repeat="article in articles" class="col-md-4 col-sm-6 col-xs-6 card-item-container">'+
          '<article class="card-item js-card-item news">'+
          '<figure>'+
            '<a ui-sref="glossar.article({articleId:{{article.id}},category:\'{{category}}\'})" name="_PE_angst_glossarcard_more_image_">'+
                    '<img ng-src="{{article.teaserImage}}" alt="{{article.title}}" class="img-responsive">'+
                '</a>'+
            '</figure>'+
        

        '<span name="_PE_angst_glossarcard_tag_" title="{{article.kicker}}" class="card-item-tag">{{article.kicker}}</span>'+
        

        

        
         '   <a class="js-open-overlay" ui-sref="glossar.article({articleId:{{article.id}},category:\'{{category}}\'})" name="_PE_angst_glossarcard_more_link_">'+
                
            '<h2 class="card-item-title">{{article.title}}</h2>'+
            '</a>'+
        

        '<a class="card-item-link js-open-overlay" ui-sref="glossar.article({articleId:{{article.id}},category:\'{{category}}\'})" name="_PE_angst_glossarcard_more_link_">Ansehen'+
            
        '</a>'+

        
    '</article></div>'

	//	template:'<li on-last-repeat class="articleCard col-sm-6 col-md-4 col-lg-3" ng-repeat="article in articles"><div class="card"><a class="original" href="{{article.url}}">Original</a><a ui-sref="glossar.article({articleId:{{article.id}},category:\'{{category}}\'})"><h4>{{article.kicker}}</h4><h3>{{article.title}}</h3><img ng-src="{{article.teaserImage}}"/></a></div></li>'
		
        	//$timeout(scope.resize, 0);  //Calling a scoped method
        	

        	           // $('.grid').masonry({
  // options
  //itemSelector: '.articleCard',
  //columnWidth: '.articleCard'
   // });
    	
	}

});





        
           