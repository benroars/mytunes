// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    //when you add something to the collection, if its the first song play it
    this.on('add', function(e) {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    //when a song triggers ended, remove it from the queue and play the next one
    this.on('ended', function(e) {
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();        
      }
    }, this);

  }

});

SongQueue.prototype.playFirst = function() {
  if (this.at(0)) {
    this.at(0).play();
  } 
};


