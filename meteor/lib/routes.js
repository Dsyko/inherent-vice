var feedSubscription;

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

PaymentController = RouteController.extend({
	onBeforeAction: function() {
		if (Meteor.user()){
			//Meteor.subscribe('bookmarks');
		}else{
			Overlay.open('authOverlay');
		}
		this.next();
	},
	data: function() {
		if (Meteor.user())
			return {data: 'here'};
	}
});


ViceController = RouteController.extend({
	onBeforeAction: function() {
		//Meteor.subscribe('vices', this.params.name);
		this.next();
	},
	data: function() {
		return VicesData[this.params.name];
	}
});

VicesController = RouteController.extend({
	data: function() {
		return _.values(VicesData);
	}
});

Router.map(function() {
	this.route('home', {path: '/'});
	this.route('vices');
	this.route('vice', {path: '/vices/:name'});
	this.route('feed');
	this.route('recipes');
	this.route('payment');
	this.route('about');
});

Router.onBeforeAction('dataNotFound', {only: 'recipe'});