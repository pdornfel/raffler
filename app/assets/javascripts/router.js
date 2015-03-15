Raffler.Router.map(function() {
	this.route('entries', { path: '/'} );


	Raffler.EntriesRoute = Ember.Route.extend({
		setupController: function(controller){
			controller.set('contents', [])
		}
	})
});
