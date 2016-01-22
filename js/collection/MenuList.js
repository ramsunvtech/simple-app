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
        "link": "africa",
        "parentId": ""
      }, {
        "id": 102,
        "title": "North America",
        "link": "north-america",
        "parentId": ""
      }, {
        "id": 103,
        "title": "South America",
        "link": "south-america",
        "parentId": ""
      }, {
        "id": 104,
        "title": "Antarctica",
        "link": "antarctica",
        "parentId": ""
      }, {
        "id": 105,
        "title": "Europe",
        "link": "europe",
        "parentId": ""
      }, {
        "id": 106,
        "title": "Australia",
        "link": "australia",
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
        "link": "chennai",
        "parentId": 108
      }, {
        "id": 113,
        "title": "Bengalaru",
        "link": "bengalaru",
        "parentId": 109
      }, {
        "id": 113,
        "title": "Hyderabad",
        "link": "hyderabad",
        "parentId": 110
      }, {
        "id": 114,
        "title": "Mumbai",
        "link": "mumbai",
        "parentId": 111
      }, {
        "id": 115,
        "title": "China",
        "link": "china",
        "parentId": 100
      }, {
        "id": 116,
        "title": "Japan",
        "link": "japan",
        "parentId": 100
      }]
    },

    getMenuList: function () {
      return this.defaults.children;
    }
  });

});