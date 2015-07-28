/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
  function pullCategory(id) {
    console.log("hier bin ich2",id);
    var cat = ""; // default feed
    var catId = id;
    switch(id) {
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
            id:id,
            articles:ids
          }).exec(function(err,data) {
            console.log("category angelegt");
          })
        });
      }
    });
  }
  pullCategory(1);
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
