Template.home.helpers({
  vices: function() {
    return _.values(VicesData);
  }
});

Template.home.events({
	'click div[data-action="open-vice"]': function() {
		var vice = this;
		Router.go('vice', {name: vice.name});
	}
});