// Content View

define([
  'view/Base',
  'text!templates/content.html'
], function (BaseView, contentTpl) {

  'use strict';

  return BaseView.extend({

    el: $('article'),

    template: contentTpl,

    initialize: function (options) {
      this.model = options.model;
      BaseView.prototype.initialize.apply(this, arguments);
    },

    templateHelpers: function () {
      return {
        "content": this.model.toJSON()
      };
    }

  });

});