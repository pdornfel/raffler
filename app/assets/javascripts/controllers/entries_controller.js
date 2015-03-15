Raffler.EntriesController = Ember.ArrayController.extend({

	actions: {
		addEntry: function(){
			this.contents.pushObject( Ember.Object.create( {name: this.get('newEntryName')} ) )
			this.set('newEntryName','');
		},
		drawWinner: function(){
			this.contents.setEach('highlight', false)
			var pool = this.contents.rejectBy("winner")
			if(pool.length > 0){
				 entry = pool[Math.floor(Math.random()*pool.length)]
				 entry.set('winner', true)
				 entry.set('highlight', true)
				}
		}
	}

});

