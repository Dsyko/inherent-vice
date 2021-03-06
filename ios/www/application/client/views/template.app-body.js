(function(){
Template.__checkName("appBody");
Template["appBody"] = new Template("Template.appBody", (function() {
  var view = this;
  return [ HTML.Raw('<div class="wrapper-welcome">\n    <div class="title-welcome">Inherent Vice</div>\n    <div class="description-welcome">Inherent Vice is made by Merrick Clark and David Sykora as a way to win iosDevCamp 2015. Built using <a href="https://www.meteor.com" target="_blank" class="js-open">Meteor</a>. View the source on <a href="https://github.com/Dsyko/inherent-vice" target="_blank" class="js-open">GitHub</a>.\n    </div>\n    \n    <div class="description-welcome">\n    The app is designed to run on a physical device, where it uses the hardware\'s native camera and GPS support.\n    </div>\n\n    <div class="description-welcome">\n    You can also run it in a simulator, or in a desktop browser as a convenience (what you\'re looking at right now).\n    </div>\n  </div>\n\n  '), HTML.DIV({
    id: "container",
    "class": function() {
      return Spacebars.mustache(view.lookup("menuOpen"));
    }
  }, "\n    ", HTML.SECTION({
    id: "menu",
    "class": "overthrow"
  }, "\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "home");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("activePage"), "home");
    }
  }, "\n        ", HTML.Raw('<span class="wrapper-menu-item">\n          <span class="icon-home"></span>\n          <span class="title-menu">Home</span>\n        </span>'), "\n      "), "\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "feed");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("activePage"), "feed");
    }
  }, "\n        ", HTML.Raw('<span class="wrapper-menu-item">\n          <span class="icon-rss"></span>\n          <span class="title-menu">What\'s<br>Cooking</span>\n        </span>'), "\n      "), "\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "recipes");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("activePage"), "recipes", "recipe");
    }
  }, "\n        ", HTML.Raw('<span class="wrapper-menu-item">\n          <span class="icon-category"></span>\n          <span class="title-menu">Recipes</span>\n        </span>'), "\n      "), "\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "bookmarks");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("activePage"), "bookmarks");
    }
  }, "\n        ", HTML.Raw('<span class="wrapper-menu-item">\n          <span class="icon-bookmark-hollow"></span>\n          <span class="title-menu">Bookmarks</span>\n        </span>'), "\n      "), "\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(view.lookup("pathFor"), "about");
    },
    "class": function() {
      return Spacebars.mustache(view.lookup("activePage"), "about");
    }
  }, "\n        ", HTML.Raw('<span class="wrapper-menu-item">\n          <span class="icon-question"></span>\n          <span class="title-menu">About</span>\n        </span>'), "\n      "), "\n    "), "\n\n      ", HTML.DIV({
    "class": "notifications"
  }, "\n        ", Blaze.Unless(function() {
    return Spacebars.call(view.lookup("connected"));
  }, function() {
    return [ "\n          ", HTML.DIV({
      "class": "notification"
    }, "\n            ", HTML.SPAN({
      "class": "icon-sync"
    }), "\n            ", HTML.DIV({
      "class": "title-notification"
    }, "Trying to connect"), "\n          "), "\n        " ];
  }), "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("notifications"));
  }, function() {
    return [ "\n          ", HTML.DIV({
      "class": "notification"
    }, "\n            ", HTML.A({
      "class": "btn-primary js-notification-action"
    }, Blaze.View("lookup:action", function() {
      return Spacebars.mustache(view.lookup("action"));
    })), "\n            ", HTML.DIV({
      "class": "title-notification"
    }, Blaze.View("lookup:title", function() {
      return Spacebars.mustache(view.lookup("title"));
    })), "\n          "), "\n        " ];
  }), "\n      "), "\n\n    ", Spacebars.include(view.lookupTemplate("overlay")), "\n\n    ", HTML.Raw('<div class="content-overlay"></div>'), "\n\n    ", HTML.DIV({
    id: "content-container"
  }, "\n      ", Spacebars.include(view.lookupTemplate("yield")), "\n    "), "\n\n  ") ];
}));

})();
