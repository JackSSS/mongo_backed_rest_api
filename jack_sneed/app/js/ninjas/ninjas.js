module.exports = function(app) {
  require('./controllers/ninjas_controller')(app);
  require('./directives/ninja_directive')(app);
  require('./directives/ninja_transclude_directive')(app);
  require('./directives/ninja_form_directive')(app);
};
