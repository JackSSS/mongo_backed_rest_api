module.exports = function(app) {
  app.directive('ninjaTranscludeDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '/templates/ninja_transclude_directive.html',
      transclude: true,
      scope: {
        messageOne: '@'
      }
    }
  });
};
