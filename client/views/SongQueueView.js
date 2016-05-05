// SongQueueView.js - Defines a backbone view class for the song queue.
//Collection View
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('add remove', function (e) {
      this.render();
    }, this);
  },

  render: function() {


    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );

    // _.each(this.collection, function(song) {
    //   var view = new SongQueueEntryView({model: song});      
    // }, this);
    
  }

});
