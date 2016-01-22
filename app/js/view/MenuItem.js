// Menu View

define([
  'view/Base',
  'text!templates/menu.html'
], function (BaseView, menuTpl) {

  'use strict';

  return BaseView.extend({

    el: $('nav'),

    template: menuTpl,
    
    events: {
      // 'click .cell.empty': 'tick',
      // 'click .back': 'goBack'
    },

    /**
     *  Game View Initializing ...
     *  Empty the Header and Summary Block.
     */
    initialize: function (options) {
      this.collection = options.collection;
      this.collection.getMenuList();
      BaseView.prototype.initialize.apply(this, arguments);
    },

    render: function () {
      // this.$el.html(newPostFormTpl);
    },

    templateHelpers: function () {
      return {
        "menuList": this.collection.getMenuList()
      };
    }

  });

});