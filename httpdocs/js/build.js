(function() {
  require.config({
    deps: ['main'],
    baseUrl: '/src/js',
    paths: {
      'jquery': 'vendor/jquery/jquery',
      'underscore': 'vendor/underscore-amd/underscore',
      'backbone': 'vendor/backbone-amd/backbone'
    }
  });

}).call(this);
