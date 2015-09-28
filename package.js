Package.describe({
  summary: 'Octicons library for Meteor.js',
  version: '0.5.1',
  name: "keiths:octicons",
  git: 'https://github.com/Keith-S/meteor-octicons'
});

Package.onUse(function (api) {
    api.addAssets([
      "lib/fonts/octicons.eot",
      "lib/fonts/octicons.svg",
      "lib/fonts/octicons.ttf",
      "lib/fonts/octicons.woff"
    ], "client");
    api.addFiles([
      "lib/css/octicons.css"
    ], 'client');
});