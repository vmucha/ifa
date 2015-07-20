/**
 * PartialController
 *
 * @description :: Server-side logic for managing partials
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getPartial : function (req, res) {
		res.view('angularpartials/'+req.param('file'),{_layoutFile: 'clear.ejs'});
	},
};

