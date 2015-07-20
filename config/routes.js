/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
    //view: 'startseite',
   // controller:'HomeController',
   // action:'index'
  },
  'get /views/:file': {
    controller: 'PartialController',
    action: 'getPartial'
  },
  '/update/:category': {
    // update list of articles from feed
    controller:'HomeController',
    action:'updateCategories'
  },
'/articles/:id': {
  // todo
    //controller: 'ArtikelController',
    //action: 'get'
    view:'homepage'
},
'get /api/v1/categories': {
    controller: 'CategoryController',
    action:'index'
},
 'get /api/v1/overview/:categoryName' : {
  // get json data for overviews
    controller: 'HomeController',
    action: 'index'
  },
   'get /api/v1/article/:id' : {
  // get json data for overviews
    controller: 'ArtikelController',
    action: 'getContent'
  }



  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
