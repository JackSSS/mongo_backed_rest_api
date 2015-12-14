module.exports = function(app) {
  app.filter('slicer', function() {
    return function(input) {
      return input[0].toUpperCase() + input.slice(1, input.length) + ' List';
    };
  });
};
