Meteor.methods({
	deleteVices: function () {
		Vices.remove();
	}
});