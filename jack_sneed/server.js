var fs = require('fs');
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var ninjaRouter = require(__dirname + '/routes/ninja_routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/ninja_base');

app.get('/:filename', function(req, res, next) {
  fs.stat(__dirname + '/build/' + req.params.filename, function(err, stats) {
    if (err) {
      console.log(err);
      return next();
    }

    if (!stats.isFile()) return next();

    var file = fs.createReadStream(__dirname + '/build/' + req.params.filename);
    file.pipe(res);
  });
});

app.use(function(req, res) {
  res.status(404).send('could not find file');
});

app.use('/api', ninjaRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('server up');
});
