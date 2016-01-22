// Menu List Collection.

define([
  'backbone',
  'model/MenuItem'
], function (Backbone, MenuItem) {

  'use strict';

  return Backbone.Collection.extend({

    model: MenuItem,

    defaults: {
      "children": [{
        "id": 100,
        "title": "Asia",
        "parentId": ""
      }, {
        "id": 101,
        "title": "Africa",
        "parentId": ""
      }, {
        "id": 102,
        "title": "North America",
        "parentId": ""
      }, {
        "id": 103,
        "title": "South America",
        "parentId": ""
      }, {
        "id": 104,
        "title": "Antarctica",
        "parentId": ""
      }, {
        "id": 105,
        "title": "Europe",
        "parentId": ""
      }, {
        "id": 106,
        "title": "Australia",
        "parentId": ""
      }, {
        "id": 107,
        "title": "India",
        "parentId": 100
      }, {
        "id": 108,
        "title": "Tamil Nadu",
        "parentId": 107
      }, {
        "id": 109,
        "title": "Karnataka",
        "parentId": 107
      }, {
        "id": 110,
        "title": "Andhra Pradesh",
        "parentId": 107
      }, {
        "id": 111,
        "title": "Maharastra",
        "parentId": 107
      }, {
        "id": 112,
        "title": "Chennai",
        "parentId": 108
      }, {
        "id": 113,
        "title": "Bengalaru",
        "parentId": 109
      }, {
        "id": 113,
        "title": "Hyderabad",
        "parentId": 110
      }, {
        "id": 114,
        "title": "Mumbai",
        "parentId": 111
      }]
    },

    getMenuList: function () {
      return this.defaults.children;
    }
  });

});