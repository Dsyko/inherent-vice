(function(){InherentVice = {
	viceTrigger: function(vice){
		console.log('Vice triggered: ', vice);
		$('.hours').html(JSON.stringify(vice));
	}
};

Handlebars.registerHelper('activePage', function() {
	// includes Spacebars.kw but that's OK because the route name ain't that.
	var routeNames = arguments;

	return _.include(routeNames, Router.current().route.name) && 'active';
});


})();
