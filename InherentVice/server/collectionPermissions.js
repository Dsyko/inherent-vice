Meteor.startup(function () {

	//Deny all database operations for users that are not logged in
	Vices.deny({
		insert: function(userId, doc){
			return !userId;
		},
		update: function(userId, doc, fields, modifier){
			return !userId;
		},
		remove: function(userId, doc){
			return !userId;
		}
	});

	Vices.allow({
		insert: function(userId, doc){
			return true;
		},
		update: function(userId, doc, fields, modifier){
			return true;
		},
		remove: function(userId, doc){
			return true;
		}
	});



//End of Meteor.startup
});
