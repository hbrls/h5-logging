var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('analytics', function () {
  return gulp
    .src('./analytics/index.js')
    .pipe(uglify())
    .pipe(rename('h5-analytics.min.js'))
    .pipe(gulp.dest('./analytics'));
});


gulp.task('logging', function () {
  return gulp
    .src('./logging/index.js')
    .pipe(uglify())
    .pipe(rename('h5-logging.min.js'))
    .pipe(gulp.dest('./logging'));
});


gulp.task('default', ['analytics', 'logging']);
