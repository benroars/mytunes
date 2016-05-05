// SongQueueView.js - Defines a backbone view class for the song queue.
//Collection View
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', function (e) {
      this.render();
    }, this);

    this.collection.on('pop', function (e) {
      this.render();
    }, this);
  },

  render: function() {
    _.each(this.collection, function(song) {
      var view = new SongQueueEntryView({model: song});      
    }, this);
    
  }

});
