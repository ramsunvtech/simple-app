// Filename: app.js
define([
  'backbone',
  'Router'
], function(Backbone, Router) {

  var initialize = function() {
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return { 
    initialize: initialize
  };

});