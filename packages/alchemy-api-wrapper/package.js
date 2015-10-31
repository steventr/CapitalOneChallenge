Package.describe({
  name: 'steventr:alchemy-api-wrapper',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('alchemy-api-wrapper.js');
  api.export("AlchemyAPI", ['server', 'client']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('steventr:alchemy-api-wrapper');
  api.addFiles('alchemy-api-wrapper-tests.js');
});
