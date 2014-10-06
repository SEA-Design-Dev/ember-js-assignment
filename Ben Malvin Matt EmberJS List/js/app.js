var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.resource('item', {path: '/item/:item_id'});
  this.resource('editItem', {path: '/item/:item_id/edit'});
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return items;
  },

  events: {
    createItem: function() {
      var items = this.modelFor('application');
      var item = items.pushObject({
        id: items.length
      });
      this.transitionTo('editItem', item);
    }
  }
});

App.UserRoute = Ember.Route.extend({
  model: function(params) {
    return items[params.item_id];
  }
});

App.EditUserRoute = Ember.Route.extend({
  model: function(params) {
    return items[params.item_id];
  },

  events: {
    save: function() {
      var item = this.modelFor('editItem');
      this.transitionTo('item', item);
    }
  }
});

var items = [
  {
    id: 0,
    name: 'ResponsiveDesign',
    type: 'Front-End',
  },
  {
    id: 1,
    name: 'DatabaseManagement',
    type: 'Ruby',
  },
  {
    id: 2,
    name: 'Angular',
    type: 'JavaScript',
  }
];