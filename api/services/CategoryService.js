module.exports = {
	update: function (req) {
			console.log("hier bin ich2",req.param('category'));
			var cat = ""; // default feed
			var catId = req.param('category');
			switch(req.param('category')) {
				case "1": 
					cat = "politik";
					break;
				case "2":
					cat = "sport";
					break;
				case "3":
					cat = "wirtschaft";
					break;
				case "4":
					cat = "geschichte";
					break;
				default:
					cat = "politik";
					catId = 1;
			}
			console.log(cat);
			var request = require('request');
			var url = "http://www.welt.de/reportage/?config=ifa_glossar_"+catId;
			console.log(url);
			request(url, function (error, response, body) {
					  if (!error && response.statusCode == 200) {
					  		var bdata = JSON.parse(body);
					  		var length = bdata.articles.length;
					  		var ids=[];
					  		for(var i=0;i<length;i++) {
					  			if(bdata.articles[i].teaserImage) {
					  				bdata.articles[i].teaserImage = bdata.articles[i].teaserImage.replace("w1-h1","ci16x9-w400");
					  			}
					  			ids.push(bdata.articles[i].id);
					  		}
					  		Artikel.create(bdata.articles).exec(function(err,data) {
					  			console.log("articles angelegt", data);
					  			Category.create({
					  				name:cat,
					  				url:url,
					  				id:req.param('category'),
					  				articles:ids
					  			}).exec(function(err,data) {
					  				console.log("category angelegt");
					  			})
					  		});
					  }
			});
		}
};