// Filename: router.js
define([
  'backbone',
  'view/Menu',
  'collection/MenuList',
], function(Backbone, MenuView, MenuListCollection) {

   var appRouter = Backbone.Router.extend({
      routes: {
        // Define some URL routes
        '': 'home',
        'products/:categoryName': 'categoryPage'
      }
   });

  var initialize = function(){

    var AppRouter = new appRouter;
       
    AppRouter.on('route:home', function(){
      new MenuView({
        collection: new MenuListCollection()
      }).render();
      // new ContentView().render();
    });

    AppRouter.on('route:categoryPage', function(){
      // new CategoryView().render();
    });

    Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});