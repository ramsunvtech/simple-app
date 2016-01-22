// Filename: app.js
define([
  'backbone',
  'marionette',
  'Router'
], function(Backbone, Marionette, Router) {

  var MyApp = new Marionette.Application();
  
  MyApp.addRegions({
    container: 'body'
  });

  var initialize = function() {
    // Pass in our Router module and call it's initialize function
    Router.initialize(MyApp);
  };

  return { 
    initialize: initialize
  };

});