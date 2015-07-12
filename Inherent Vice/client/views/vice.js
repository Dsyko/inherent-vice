var TAB_KEY = 'recipeShowTab';

Template.vice.onCreated(function() {
	if (Router.current().params.activityId)
		Template.vice.setTab('feed');
	else
		Template.vice.setTab('recipe');
});

Template.vice.onRendered(function () {
	this.$('.recipe').touchwipe({
		wipeDown: function () {
			if (Session.equals(TAB_KEY, 'recipe'))
				Template.vice.setTab('make')
		},
		preventDefaultEvents: false
	});
	this.$('.attribution-recipe').touchwipe({
		wipeUp: function () {
			if (! Session.equals(TAB_KEY, 'recipe'))
				Template.vice.setTab('recipe')
		},
		preventDefaultEvents: false
	});
});

// CSS transitions can't tell the difference between e.g. reaching
//   the "make" tab from the expanded state or the "feed" tab
//   so we need to help the transition out by attaching another
//   class that indicates if the feed tab should slide out of the
//   way smoothly, right away, or after the transition is over
Template.vice.setTab = function(tab) {
	var lastTab = Session.get(TAB_KEY);
	Session.set(TAB_KEY, tab);

	var fromRecipe = (lastTab === 'recipe') && (tab !== 'recipe');
	$('.feed-scrollable').toggleClass('instant', fromRecipe);

	var toRecipe = (lastTab !== 'recipe') && (tab === 'recipe');
	$('.feed-scrollable').toggleClass('delayed', toRecipe);
}

Template.vice.helpers({
	isActiveTab: function(name) {
		return Session.equals(TAB_KEY, name);
	},
	activeTabClass: function() {
		return Session.get(TAB_KEY);
	},
	bookmarked: function() {
		return Meteor.user() && _.include(Meteor.user().bookmarkedRecipeNames, this.name);
	},
	activities: function() {
		return false;
	},
	committed: function() {
		//console.log('committed helper run');
		//Vices.find().fetch();
		var currentData = Template.currentData();
		console.log(currentData);
		return _.isNumber((currentData && currentData.expireTime)) && (moment().valueOf() < currentData.expireTime);
	},
	timeleft: function() {
		var currentData = Template.currentData();
		return moment(currentData.expireTime).fromNow();
	},
	isSelectedCharity: function(charity) {
		var currentData = Template.currentData();
		return currentData && currentData.selectedCharity === charity;
	}
});

Template.vice.events({
	'click .js-add-bookmark': function(event) {
		event.preventDefault();

		if (! Meteor.userId())
			return Overlay.open('authOverlay');

		Meteor.call('bookmarkRecipe', this.name);
	},

	'click .js-remove-bookmark': function(event) {
		event.preventDefault();

		Meteor.call('unbookmarkRecipe', this.name);
	},

	'click .js-show-recipe': function(event) {
		event.stopPropagation();
		Template.vice.setTab('make')
	},

	'click .js-show-feed': function(event) {
		event.stopPropagation();
		Template.vice.setTab('feed')
	},

	'click .js-uncollapse': function() {
		Template.vice.setTab('recipe')
	},

	'click .js-share': function() {
		Overlay.open('shareOverlay', this);
	},
	'click div[data-action="select-time"]': function(event, template) {
		template.$('div[data-action="select-time"]').removeClass('selected');
		$(event.currentTarget).addClass('selected');
	},
	'click a[data-action="commit-to-time"]': function(event, template) {
		//console.log("commit clicked: ");
		event.preventDefault();
		event.stopPropagation();
		var selectedTime = template.$('div[data-action="select-time"].selected');
		var expireTime = moment().add(1, selectedTime.data('time')).valueOf();
		var vice = Template.currentData();
		if(vice._id){
			Vices.update({_id: vice._id}, {$set: {'expireTime': expireTime} });
		}else{
			if(Meteor.userId()){
				Vices.insert(_.extend({userId: Meteor.userId(), 'expireTime': expireTime}, vice));
			}
		}
		//console.log("selected time: ", expireTime);
	},
	'click div[data-action="select-charity"]': function(event, template) {
		event.preventDefault();
		event.stopPropagation();

		template.$('div[data-action="select-charity"]').removeClass('selected');
		$(event.currentTarget).addClass('selected');
		var selectedCharity = $(event.currentTarget).data('charity');
		var vice = Template.currentData();
		if(vice._id){
			Vices.update({_id: vice._id}, {$set: {'selectedCharity': selectedCharity} });
		}else{
			if(Meteor.userId()){
				Vices.insert(_.extend({userId: Meteor.userId(), 'selectedCharity': selectedCharity}, vice));
			}
		}
	}
});
