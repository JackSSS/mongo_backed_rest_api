'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpMocha = require('gulp-mocha');
var appFiles = ['server.js'];
var testFiles = ['./test/test.js'];
var webpack = require('webpack-stream');

gulp.task('static:dev', function() {
  gulp.src('app/**/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('webpack:dev', function() {
  return gulp.src('app/js/entry.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/'));
});

gulp.task('jshint', function() {
  return gulp.src(appFiles)
    .pipe(jshint({
      node: true,
      globals: {
        describe: true,
        it: true,
        before: true,
        after: true,
      }
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('mocha', function() {
  return gulp.src(testFiles, {read: false})
    .pipe(gulpMocha({reporter: 'landing'}));
});

gulp.task('build:dev', ['webpack:dev', 'static:dev']);
gulp.task('default', ['jshint', 'mocha', 'build:dev']);
