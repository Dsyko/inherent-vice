Meteor.publish('vices', function () {
	check(arguments, [Match.Any]);
	if(this.userId) {
		return Vices.find({userId: this.userId});
	}
});