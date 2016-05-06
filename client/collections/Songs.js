// Songs.js - Defines a backbone collection class for songs.
//LIBRARY
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
  	this.fetch({reset: true});
  },

  url: 'https://api.parse.com/1/classes/songs/',

  sync: function(method, model, options) {
            var that = this;
                var params = _.extend({
                    type: 'GET',
                    dataType: 'json',
                    url: that.url,
                    processData: false
                }, options);

            return $.ajax(params);
  },

  parse: function(response) {
  	return response.results;
  }

});