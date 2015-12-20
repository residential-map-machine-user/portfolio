var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var coffee = require('gulp-coffee');
var plumber = require('gulp-plumber');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

gulp.task('less', function () {
  return gulp.src('./assets/less/*.less')
    .pipe(plumber()) 
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/stylesheets'))
});

gulp.task('coffee', function() {
  gulp.src('./assets/coffee/*.coffee')
    .pipe(plumber()) 
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./public/javascripts'))
});

gulp.task('nodemon', function(cb) {
  var called = false;
  nodemon({
        script: './bin/www',
        ext: 'js html css jade coffee',
        env: {
            NODE_ENV: 'development'
        }
  })
  .on('start', function() {
    if (!called) {
        called = true;
        cb();
    }
  })
  .on('restart', function() {
        setTimeout(function() {
        browserSync.reload();
     }, 500);
  });
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: 'http://localhost:3000',
        port: 8000
    });
});

gulp.task('default', ['browser-sync'],  function () {
  gulp.watch('./assets/less/*.less', ['less']);
  gulp.watch('./assets/coffee/*.coffee', ['coffee']);
});
