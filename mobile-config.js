<<<<<<< HEAD
//App.info({
//	id: 'com.inherent.vice',
//  name: 'Inherent Vice',
//  description: 'A habit curbing app built in meteor',
//  author: 'Merrick Clark and David Sykora',
//  email: 'us@example.com	',
//  website: 'https://github.com/Dsyko/inherent-vice',
//  version: '0.0.1'
//});
=======

>>>>>>> 4375742b38db6bbe7c438e67471872c1ed243457

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
  'ipad_portrait': 'resources/splash/splash-768x1024.png',
  'ipad_portrait_2x': 'resources/splash/splash-768x1024@2x.png',
  'ipad_landscape': 'resources/splash/splash-1024x768.png',
  'ipad_landscape_2x': 'resources/splash/splash-1024x768@2x.png',

  // Android
  'android_ldpi_portrait': 'resources/splash/splash-200x320.png',
  'android_ldpi_landscape': 'resources/splash/splash-320x200.png',
  'android_mdpi_portrait': 'resources/splash/splash-320x480.png',
  'android_mdpi_landscape': 'resources/splash/splash-480x320.png',
  'android_hdpi_portrait': 'resources/splash/splash-480x800.png',
  'android_hdpi_landscape': 'resources/splash/splash-800x480.png',
  'android_xhdpi_portrait': 'resources/splash/splash-720x1280.png',
  'android_xhdpi_landscape': 'resources/splash/splash-1280x720.png'
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');

