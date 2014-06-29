Package.describe({
  summary: 'Octicons library for Meteor.js'
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