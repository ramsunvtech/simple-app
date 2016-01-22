// Common Layout

define([
  'backbone',
  'marionette',
  'text!templates/common-layout.html'
], function (Backbone, Marionette, commonLayoutTemplate) {

  'use strict';

  return Marionette.LayoutView.extend({
      template: commonLayoutTemplate,

      attributes: {
          id: 'my-page'
      },

      regions: {
          header: 'header',
          menu: 'menu',
          content: 'article',
      }
  });

});