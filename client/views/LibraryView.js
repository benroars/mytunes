// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  className: 'table table-hover table-bordered table-inverse',

  initialize: function() {
    
    this.render();
    this.collection.on('reset', function(){this.render();}, this);

    this.collection.on('reset', function(e) {
      this.render();
    }, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th class="thead-inverse">Artist</th><th class="thead-inverse">Song</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
