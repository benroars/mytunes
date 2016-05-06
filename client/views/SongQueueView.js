// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  className: 'table table-hover table-bordered table-inverse',

  initialize: function() {
    this.render();
  	this.collection.on('add remove', function(){
  		this.render();
  	}, this);

  },

  render: function() {
    // _.each(this.collection, function(song) {
    // 	var view = new SongQueueEntryView({model: song})
    //   return this.$el.append(view.render().el);
    // }, this);


    this.$el.html('<th class="thead-inverse">Song Queue</th><th class="thead-inverse"></th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
