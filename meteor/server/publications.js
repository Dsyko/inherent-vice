Meteor.publish('systems', function () {
	check(arguments, [Match.Any]);
	if(this.userId) {
		return Systems.find();
	}
});