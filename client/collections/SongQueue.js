// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(songs) {
    this.on('add', function(e) {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function(e) {
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();        
      }
    }, this);

    this.on('dequeue', function(e) {
      this.remove(this.at(0));
    }, this);


  }


});

SongQueue.prototype.playFirst = function() {
  this.at(0).play();
};


