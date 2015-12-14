module.exports = function(app) {
  app.directive('ninjaFormDirective', function() {
    return {
      restrict: 'AC',
      replace: true,
      templateUrl: '/templates/ninja_form_template.html',
      transclude: true,
      scope: {
        buttonText: '@',
        headingText: '@',
        formName: '@',
        ninja: '=',
        save: '&'
      }
    }
  });
};
