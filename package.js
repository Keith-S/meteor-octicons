Package.describe({
  summary: 'Octicons library for Meteor.js',
  version: '0.2.0',
  name: "keiths:octicons",
  git: 'https://github.com/Keith-S/meteor-octicons'
});

Package.on_use(function (api) {
    api.add_files([
        "lib/fonts/octicons.eot",
        "lib/fonts/octicons.svg",
        "lib/fonts/octicons.ttf",
        "lib/fonts/octicons.woff",
        "lib/css/octicons.css"
    ], "client");
});