//App.info({
//	id: 'com.inherent.vice',
//  name: 'Inherent Vice',
//  description: 'A habit curbing app built in meteor',
//  author: 'Merrick Clark and David Sykora',
//  email: 'us@example.com	',
//  website: 'https://github.com/Dsyko/inherent-vice',
//  version: '0.0.1'
//});

App.icons({
  // iOS
  'iphone': 'resources/icons/icon-60.png',
  'iphone_2x': 'resources/icons/icon-60@2x.png',
  'ipad': 'resources/icons/icon-72.png',
  'ipad_2x': 'resources/icons/icon-72@2x.png',
});

App.launchScreens({
  // iOS
  'iphone': 'resources/splash/Default~iphone.png',
  'iphone_2x': 'resources/splash/Default@2x~iphone.png',
  'iphone5': 'resources/splash/Default-568h@2x.png',
  'ipad_portrait': 'resources/splash/Default-Portrait~ipad.png',
  'ipad_portrait_2x': 'resources/splash/Default-Portrait@2x~ipad.png',
  'ipad_landscape': 'resources/splash/Default-Landscape~ipad.png',
  'ipad_landscape_2x': 'resources/splash/Default-Landscape@2x~ipad.png',

});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');

