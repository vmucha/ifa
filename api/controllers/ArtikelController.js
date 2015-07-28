/**
 * ArtikelController
 *
 * @description :: Server-side logic for managing artikels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getArticles: function (req, res) {

        Artikel.find().exec(function (err, data) {
            console.log(data)
        });

        res.send("test2");
    },

    show: function (req, res) {
        console.log("hier bin ich1");

        Artikel.find().exec(function (err, data) {
            res.view("overview", {articles: data});
        });
    },

    getContent: function (req, res) {
        var request = require('request');
        request('http://www.welt.de/article' + req.param('id') + '/?noredirect=true&config=jsn&' + Math.random(), function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var bdata = JSON.parse(body);
                bdata.articles[0].processedParagraphs = [];
                bdata.articles[0].body = '';
                switch(bdata.articles[0].type) {
                    case "news":
                        for(var i=0;i<bdata.articles[0].paragraphs.length;i++) {
                            for(var u=0;u<bdata.articles[0].paragraphs[i].parts.length;u++) {
                                bdata.articles[0].processedParagraphs.push(bdata.articles[0].paragraphs[i].parts[u]);
                            }
                            bdata.articles[0].body += bdata.articles[0].paragraphs[i].openinigTag+bdata.articles[0].paragraphs[i].content+bdata.articles[0].paragraphs[i].openinigTag.replace("<","</");
                        }
                        break;
                    case "xhtml":
                         bdata.articles[0].body += "TODO XHTML";
                         break;
                    case "video":
                        bdata.articles[0].body += "TODO VIDEO";
                        break;
                    default:
                        bdata.articles[0].body += "DEFAULT";
                }
                Artikel.update({id: req.param('id')},{
                    intro: bdata.articles[0].intro,
                    paragraphs: bdata.articles[0].processedParagraphs,
                    body: bdata.articles[0].body
                }, function(err, updated){
                    res.send(updated[0]);
                });
            }
        });
    }
};