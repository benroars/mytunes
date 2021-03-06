// SongModel.js - Defines a backbone model class for songs.
// Triggering an event here will also trigger the event on the collection

var SongModel = Backbone.Model.extend({
  
  defaults: {
    url: "",
    title: "",
    artist: ""
  },

  defaults: {
    url: "",
    title: "",
    artist: ""
  },

  play: function() {
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  }

});
