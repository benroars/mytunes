// Songs.js - Defines a backbone collection class for songs.
//LIBRARY
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(data) {
    this.fetch({reset: true});
  },

  url: 'https://api.parse.com/1/classes/songs/',

  parse: function(response) {
    return response.results;
  }

});