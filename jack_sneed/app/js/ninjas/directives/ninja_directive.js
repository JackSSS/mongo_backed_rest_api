module.exports = function(app) {
  app.directive('ninjaDirective', function() {
    return {
      restrict: 'AC',
      templateUrl: '/templates/ninja_directive_template.html',
      scope: {
        ninja: '=',
      }
    }
  });
};
