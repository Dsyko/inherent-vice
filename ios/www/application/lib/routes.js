(function(){var feedSubscription;

// Handle for launch screen possibly dismissed from app-body.js
dataReadyHold = null;

// Global subscriptions
if (Meteor.isClient) {
	//Meteor.subscribe('news');
}

Router.configure({
	layoutTemplate: 'appBody',
	notFoundTemplate: 'notFound'
});

if (Meteor.isClient) {
	// Keep showing the launch screen on mobile devices until we have loaded
	// the app's data
	dataReadyHold = LaunchScreen.hold();
}

HomeController = RouteController.extend({
	onBeforeAction: function() {
		//Meteor.subscribe('latestActivity', function() {
		//	dataReadyHold.release();
		//});
		this.next();
	}
});

Router.map(function() {
	this.route('home', {path: '/'});
	this.route('feed');
	this.route('recipes');
	this.route('bookmarks');
	this.route('about');
	this.route('recipe', {path: '/recipes/:name'});
	this.route('admin', { layoutTemplate: null });
});

Router.onBeforeAction('dataNotFound', {only: 'recipe'});

})();
