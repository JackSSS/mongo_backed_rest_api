var mongoose = require('mongoose');
var express = require('express');
var app = express();
var ninjaRouter = require(__dirname + '/routes/ninja_routes');
var authRouter = require(__dirname + '/routes/auth_routes');
process.env.APP_SECRET = process.env.APP_SECRET || 'changemechangemechangeme';

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/ninja_base');

app.use('/api', ninjaRouter);
app.use('/api', authRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('server up');
});
