Raffler.ApplicationController = Ember.Controller.extend({

	entries: [],

	actions: {
		addEntry: function(){
			this.entries.pushObject({name: this.get('newEntryName')});
			this.set('newEntryName','');
		}
	}

});

