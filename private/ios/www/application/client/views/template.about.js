(function(){
Template.__checkName("about");
Template["about"] = new Template("Template.about", (function() {
  var view = this;
  return HTML.DIV({
    "class": "page about"
  }, "\n    ", Blaze._TemplateWith(function() {
    return {
      title: Spacebars.call("About"),
      black: Spacebars.call(true)
    };
  }, function() {
    return Spacebars.include(view.lookupTemplate("nav"));
  }), HTML.Raw('\n\n    <div class="content-scrollable">\n      <div class="bg-image about">\n        <h1 class="title-about">\n          <img src="img/app/about-text.png" alt="Inherent Vice">\n        </h1>\n      </div>\n      <div class="description-about">\n        <p>Take control of your vices, lose those bad habits, and help your favorite charity along the way.</p>\n\n        <p>First choose the vice you are trying to take control of, then pick your favorite charity. Inherent Vice will check in with you when it detects you may be indulging your Vice and if you have given in to your bad habit you will be charged a small fee. The money will go to your charity of choice and the hit to your wallet will help you curb your habit.</p>\n\n        <p>Inherent Vice is made by <a href="https://github.com/merrickclark" target="_blank" class="js-open">Merrick Clark</a> and <a href="https://github.com/Dsyko" target="_blank" class="js-open">David Sykora</a> to win <a href="http://www.iosdevcamp.org/" target="_blank" class="js-open">iOSDevcamp 2015</a> and is built with <a href="https://www.meteor.com" target="_blank" class="js-open">Meteor</a>. View the source on <a href="https://github.com/Dsyko/inherent-vice" target="_blank" class="js-open">GitHub</a>.</p>\n      </div>\n\n    </div>\n    <a href="https://www.meteor.com" class="btn-primary js-open" target="_blank">Learn More</a>\n  '));
}));

})();
