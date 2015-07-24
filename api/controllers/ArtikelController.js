/**
 * ArtikelController
 *
 * @description :: Server-side logic for managing artikels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getArticles: function(req, res) {
		//var art = req.params;
						console.log("hier bin ich123");

		Artikel.find().exec(function(err, data){
			console.log(data)
		});


		//console.log(Artikel.url);
		res.send("test2");
	},

	show:function(req,res) {
						console.log("hier bin ich1");

		Artikel.find().exec(function(err,data) {
			res.view("overview",{articles:data});
		});	
	},

	getContent: function(req, res) {		
			var result;
			//Artikel.find({where: {id:"143821894"}}).exec(function(err,data) {
				/*console.log(req.param("id"));
				Artikel.find({where: {id:req.param('id')}}).exec(function(err,data) {
					console.log(data);
				result = data;
				res.send("ok");
				//res.view('result',{metatitle:data[0].title,currentArticle:data[0]});
			});
		//res.send(req.param('id'));*/

			var request = require('request');
			request('http://www.welt.de/article'+req.param('id')+'/?noredirect=true&config=jsn&'+Math.random(), function (error, response, body) {
					  if (!error && response.statusCode == 200) {
					  		var bdata = JSON.parse(body);
					  		res.send(bdata.articles);
					  	}
				});
		}


	};
					  		/*for(var i=0;i<bdata.articles.length;i++) {
					  			var art = bdata.articles[i];
					  			art.teaserImage = art.teaserImage.replace("w1-h1","w400-h400-oo");
					  			Artikel.create(art).exec(function(err, data){
					  				length--;
					  				console.log("success, gespeichert",length);
					  				if(!length) {
					  					  Artikel.find().exec(function(err,data) {
												//res.view("overview",{articles:data});
										});	
					  				}
					  			});

	}






};







/*
module.exports = {
	update: function (req) {
			console.log("hier bin ich2",req.param('category'));
			var cat = ""; // default feed
			switch(req.param('category')) {
				case "0": 
					cat = "politik";
					break;
				case "1":
					cat = "sport";
					break;
				case "2":
					cat = "wirtschaft";
					break;
				case "3":
					cat = "geschichte";
					break;
				default:
					cat = "politik";
			}
			console.log(cat);
			var request = require('request');
			request('http://www.welt.de/'+cat+'/?config=iphone_ressort', function (error, response, body) {
					  if (!error && response.statusCode == 200) {
					  		var bdata = JSON.parse(body);
					  		var length = bdata.articles.length;
					  		var ids=[];
					  		for(var i=0;i<length;i++) {
					  			bdata.articles[i].teaserImage = bdata.articles[i].teaserImage.replace("w1-h1","w400-h400-oo");
					  			ids.push(bdata.articles[i].id);
					  		}
					  		Artikel.create(bdata.articles).exec(function(err,data) {
					  			console.log("articles angelegt");
					  			Category.create({
					  				name:cat,
					  				url:"http://www.welt.de/"+cat+"/?config=iphone_ressort",
					  				id:req.param('category'),
					  				articles:ids
					  			}).exec(function(err,data) {
					  				console.log("category angelegt");
					  			})
					  		});
					  		/*for(var i=0;i<bdata.articles.length;i++) {
					  			var art = bdata.articles[i];
					  			art.teaserImage = art.teaserImage.replace("w1-h1","w400-h400-oo");
					  			Artikel.create(art).exec(function(err, data){
					  				length--;
					  				console.log("success, gespeichert",length);
					  				if(!length) {
					  					  Artikel.find().exec(function(err,data) {
												//res.view("overview",{articles:data});
										});	
					  				}
					  			});
					  		}*/

					  		//var urlparts = bdata.data.result.items[0].url.split('/');
					  		//var name = urlparts[urlparts.length-1];
					  	//	console.log("erfolg!!",bdata);
					  		//self.saveNetwork(data[idindex].id, 'twitter', name, null);
