Template.payment.helpers({
  recipeCount: function() {
    //return pluralize(this.length, 'recipe');
  },
  userIsLoggedIn: function() {
    return _.isString(Meteor.userId());
  }
});