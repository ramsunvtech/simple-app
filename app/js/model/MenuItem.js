// Menu Item Model.

define([
  'backbone'
], function (Backbone) {

  'use strict';

  return Backbone.Model.extend({

    defaults: {
      "id": 100,
      "title": "Asia",
      "parent_id": ""
    }

  });

});