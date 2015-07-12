

Template.payment.created = function(){
	//Can't use 'this' to get handle on template and use template.find, throws error that Template is not in DOM
	//braintree = Braintree.create('MIIBCgKCAQEAqeKCOjIH0DpUjfC6xcXq0fn+ZiFrB3aWB9bD02v0jnchs79OlTvleZCg4o04fvWZ5WsCgMJXxcms/Z9S3Hgf3lcmmJU9eNezaN64JZTwAPH4x9hkEuvLiNWeHiv7Ok8t2/bxThilpBP/CjrkXQ2SwLJQfelbP+MRpdm3/zGNd+TE/r1aFBTPQeg513DJ4o1OgD1dLOaeQ3u4X6P1mor2WzZHW3Xsg6fUjBojVY/eH7hnRTFyHEfwl/ZOqMGSnC7x4sPbJ+NgnqpGmmwRisX6YjzG62qjrq1S0BDSnKeIJVXy6YzyeD1w3Oxk3xKFy1JmF8XAHob3xuYh2SeH91KOywIDAQAB');
};

Template.payment.helpers({
	recipeCount: function() {
		//return pluralize(this.length, 'recipe');
	},
	userIsLoggedIn: function() {
		return _.isString(Meteor.userId());
	},
	paymentComplete: function() {
		var route = Router.current();
		return route && route.params && route.params.query && route.params.query.complete === 'true';
	}
});


Template.payment.events({
	'click a[data-action="logout"]': function(event, template) {
		event.preventDefault();
		event.stopPropagation();
		Meteor.logout();
	}
});

Template.creditCardForm.created = function(){
	//Can't use 'this' to get handle on template and use template.find, throws error that Template is not in DOM
	//braintree = Braintree.create('MIIBCgKCAQEAqeKCOjIH0DpUjfC6xcXq0fn+ZiFrB3aWB9bD02v0jnchs79OlTvleZCg4o04fvWZ5WsCgMJXxcms/Z9S3Hgf3lcmmJU9eNezaN64JZTwAPH4x9hkEuvLiNWeHiv7Ok8t2/bxThilpBP/CjrkXQ2SwLJQfelbP+MRpdm3/zGNd+TE/r1aFBTPQeg513DJ4o1OgD1dLOaeQ3u4X6P1mor2WzZHW3Xsg6fUjBojVY/eH7hnRTFyHEfwl/ZOqMGSnC7x4sPbJ+NgnqpGmmwRisX6YjzG62qjrq1S0BDSnKeIJVXy6YzyeD1w3Oxk3xKFy1JmF8XAHob3xuYh2SeH91KOywIDAQAB');
};

Template.creditCardForm.rendered = function(){
	var card = new Card({
		// a selector or DOM element for the form where users will
		// be entering their information
		form: 'form', // *required*
		// a selector or DOM element for the container
		// where you want the card to appear
		container: '.card-wrapper', // *required*

		formSelectors: {
			numberInput: 'input#CardNumber', // optional — default input[name="number"]
			expiryInput: 'input#CardExpiry', // optional — default input[name="expiry"]
			cvcInput: 'input#CardCvc', // optional — default input[name="cvc"]
			nameInput: 'input#CardName' // optional - defaults input[name="name"]
		},

		width: 300, // optional — default 350px
		formatting: true, // optional - default true

		// Strings for translation - optional
		messages: {
			validDate: 'valid\ndate', // optional - default 'valid\nthru'
			monthYear: 'mm/yyyy', // optional - default 'month/year'
		},

		// Default values for rendered fields - optional
		values: {
			number: '•••• •••• •••• ••••',
			name: 'Full Name',
			expiry: '••/••',
			cvc: '•••'
		},

		// if true, will log helpful messages for setting up Card
		debug: false // optional - default false
	});
};

Template.braintreeForm.created = function(){
	//Can't use 'this' to get handle on template and use template.find, throws error that Template is not in DOM
	//braintree = Braintree.create('MIIBCgKCAQEAqeKCOjIH0DpUjfC6xcXq0fn+ZiFrB3aWB9bD02v0jnchs79OlTvleZCg4o04fvWZ5WsCgMJXxcms/Z9S3Hgf3lcmmJU9eNezaN64JZTwAPH4x9hkEuvLiNWeHiv7Ok8t2/bxThilpBP/CjrkXQ2SwLJQfelbP+MRpdm3/zGNd+TE/r1aFBTPQeg513DJ4o1OgD1dLOaeQ3u4X6P1mor2WzZHW3Xsg6fUjBojVY/eH7hnRTFyHEfwl/ZOqMGSnC7x4sPbJ+NgnqpGmmwRisX6YjzG62qjrq1S0BDSnKeIJVXy6YzyeD1w3Oxk3xKFy1JmF8XAHob3xuYh2SeH91KOywIDAQAB');
};

Template.braintreeForm.rendered = function(){
	//var card = new Card({
	//	// a selector or DOM element for the form where users will
	//	// be entering their information
	//	form: 'form', // *required*
	//	// a selector or DOM element for the container
	//	// where you want the card to appear
	//	container: '.card-wrapper', // *required*
	//
	//	formSelectors: {
	//		numberInput: 'input#CardNumber', // optional — default input[name="number"]
	//		expiryInput: 'input#CardExpiry', // optional — default input[name="expiry"]
	//		cvcInput: 'input#CardCvc', // optional — default input[name="cvc"]
	//		nameInput: 'input#CardName' // optional - defaults input[name="name"]
	//	},
	//
	//	width: 300, // optional — default 350px
	//	formatting: true, // optional - default true
	//
	//	// Strings for translation - optional
	//	messages: {
	//		validDate: 'valid\ndate', // optional - default 'valid\nthru'
	//		monthYear: 'mm/yyyy', // optional - default 'month/year'
	//	},
	//
	//	// Default values for rendered fields - optional
	//	values: {
	//		number: '•••• •••• •••• ••••',
	//		name: 'Full Name',
	//		expiry: '••/••',
	//		cvc: '•••'
	//	},
	//
	//	// if true, will log helpful messages for setting up Card
	//	debug: false // optional - default false
	//});
	//braintree = Braintree.create('MIIBCgKCAQEAqeKCOjIH0DpUjfC6xcXq0fn+ZiFrB3aWB9bD02v0jnchs79OlTvleZCg4o04fvWZ5WsCgMJXxcms/Z9S3Hgf3lcmmJU9eNezaN64JZTwAPH4x9hkEuvLiNWeHiv7Ok8t2/bxThilpBP/CjrkXQ2SwLJQfelbP+MRpdm3/zGNd+TE/r1aFBTPQeg513DJ4o1OgD1dLOaeQ3u4X6P1mor2WzZHW3Xsg6fUjBojVY/eH7hnRTFyHEfwl/ZOqMGSnC7x4sPbJ+NgnqpGmmwRisX6YjzG62qjrq1S0BDSnKeIJVXy6YzyeD1w3Oxk3xKFy1JmF8XAHob3xuYh2SeH91KOywIDAQAB');

	//Working only in browser
	var clientToken = "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJiZmE3NTFhNDE5NmM0MDdkOTRmMDk2OGI3MzE4NWYxNjk5ZWNiYmQ3ZWRjYWEwN2YxOGZmNWJiODQ4ZTg0NjgyfGNyZWF0ZWRfYXQ9MjAxNS0wNy0xMlQxMzoyNjoyMy42OTEyMjEyNzUrMDAwMFx1MDAyNm1lcmNoYW50X2lkPWRjcHNweTJicndkanIzcW5cdTAwMjZwdWJsaWNfa2V5PTl3d3J6cWszdnIzdDRuYzgiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZGNwc3B5MmJyd2RqcjNxbi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL2RjcHNweTJicndkanIzcW4vY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIn0sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsInRocmVlRFNlY3VyZSI6eyJsb29rdXBVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZGNwc3B5MmJyd2RqcjNxbi90aHJlZV9kX3NlY3VyZS9sb29rdXAifSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiQWNtZSBXaWRnZXRzLCBMdGQuIChTYW5kYm94KSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwibWVyY2hhbnRBY2NvdW50SWQiOiJzdGNoMm5mZGZ3c3p5dHc1IiwiY3VycmVuY3lJc29Db2RlIjoiVVNEIn0sImNvaW5iYXNlRW5hYmxlZCI6dHJ1ZSwiY29pbmJhc2UiOnsiY2xpZW50SWQiOiIxMWQyNzIyOWJhNThiNTZkN2UzYzAxYTA1MjdmNGQ1YjQ0NmQ0ZjY4NDgxN2NiNjIzZDI1NWI1NzNhZGRjNTliIiwibWVyY2hhbnRBY2NvdW50IjoiY29pbmJhc2UtZGV2ZWxvcG1lbnQtbWVyY2hhbnRAZ2V0YnJhaW50cmVlLmNvbSIsInNjb3BlcyI6ImF1dGhvcml6YXRpb25zOmJyYWludHJlZSB1c2VyIiwicmVkaXJlY3RVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbS9jb2luYmFzZS9vYXV0aC9yZWRpcmVjdC1sYW5kaW5nLmh0bWwiLCJlbnZpcm9ubWVudCI6Im1vY2sifSwibWVyY2hhbnRJZCI6ImRjcHNweTJicndkanIzcW4iLCJ2ZW5tbyI6Im9mZmxpbmUiLCJhcHBsZVBheSI6eyJzdGF0dXMiOiJtb2NrIiwiY291bnRyeUNvZGUiOiJVUyIsImN1cnJlbmN5Q29kZSI6IlVTRCIsIm1lcmNoYW50SWRlbnRpZmllciI6Im1lcmNoYW50LmNvbS5icmFpbnRyZWVwYXltZW50cy5zYW5kYm94LkJyYWludHJlZS1EZW1vIiwic3VwcG9ydGVkTmV0d29ya3MiOlsidmlzYSIsIm1hc3RlcmNhcmQiLCJhbWV4Il19fQ==";
	braintree.setup(clientToken, "dropin", {
		container: "payment-form"
	});
};