App = Ember.Application.create();

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return gitterAccount;
  }
});

var gitterAccount = [
  {
    id: 1,
    name: 'Jay',
    gitterName: 'Jay-TechSalon',
    picture: 'Jay.jpeg'
  },

  {
    id: 2,
    name: 'Craig',
    gitterName: 'CraigSGrant',
    picture: 'Craig.jpeg'
  },

  {
    id: 3,
    name: 'Sean',
    gitterName: 'SeanGolob',
    picture: 'Sean.jpeg'
  }
];
