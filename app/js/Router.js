// Filename: router.js
define([
  'backbone',
  'view/MenuItem',
  'view/Content',
  'model/Content',
  'collection/MenuList',
], function(Backbone, MenuView, ContentView, ContentModel, MenuListCollection) {

   var appRouter = Backbone.Router.extend({
      routes: {
        // Define some URL routes
        '': 'home',
        'details/:categoryName': 'categoryPage'
      }
   });

  var initialize = function () {
  
    var AppRouter = new appRouter;

    AppRouter.on('route:home', function() {
      var menuView = new MenuView({
        collection: new MenuListCollection()
      })
    });

    AppRouter.on('route:categoryPage', function(category){
      var contentURL = '/mock/' + category + '.json';
      var contentModel = new ContentModel({
        url: contentURL
      }).fetch({
        success: function (model, response) {
          new ContentView({
            "model": model
          }).render();
        }
      });
    });

    Backbone.history.start({
      pushState: true
    });

  };

  return { 
    initialize: initialize
  };
});