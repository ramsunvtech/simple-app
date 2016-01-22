// Content Model.

define([
  'backbone'
], function (Backbone) {

  'use strict';

  return Backbone.Model.extend({
 	
    initialize: function(option){
      this.url = option.url;
    },
    
    defaults: {
      "id": 100,
      "title": "",
      "description": ""
    }

  });

});