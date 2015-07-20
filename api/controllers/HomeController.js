/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	updateCategories: function(req,res) {
		console.log("update");
		CategoryService.update(req);
		res.send("update");
	},
	index: function (req,res) {
		Category.findOne().where({
			name:req.param('categoryName')
		}).exec(function(err,data) {
			Artikel.find().where({
				id:data.articles
			}).exec(function(err,data) {
				res.send(data);	
			});
		});
		
	}
};

