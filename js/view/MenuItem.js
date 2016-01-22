// Menu View

define([
  'view/Base',
  'text!templates/menu-item.html'
], function (BaseView, menuTpl) {

  'use strict';

  return BaseView.extend({

    el: $('nav'),

    template: menuTpl,
    
    events: {
      'click ul.menu li a': 'expandMenu',
      'click .first': 'showAll',
      'click .back': 'goBack'
    },

    initialize: function (options) {
      this.collection = options.collection;
      BaseView.prototype.initialize.apply(this, arguments);
    },

    showAll: function (e) {
      e.preventDefault();

      var $ul = $('ul.menu');
      
      $ul.removeClass('submenu')
      $ul.find('li.root a').removeClass('selected');
      $ul.find('li.root').show();
      $ul.find('li.submenu').hide();
      Backbone.history.navigate('', {
          trigger: true
      });
    },

    expandMenu: function (e) {
      e.preventDefault();

      var $el = $(e.currentTarget),
          $ul = $('ul.menu'),
          link = $el.attr('href'),
          menuClass = 'li.menu-' + $el.data('id'),
          currentItem = 'ul.menu li.' + $el.data('parent');

      $ul.addClass('submenu');
      $(menuClass).show();
      $ul.find('li a').removeClass('selected');
      $el.addClass('selected');
      $(currentItem).hide();
      $el.parent().show();

      if( link != '#') {
        Backbone.history.navigate(link, {
          trigger: true
        });
      }
    },

    templateHelpers: function () {
      return {
        "menuList": this.collection.getMenuList()
      };
    }

  });

});