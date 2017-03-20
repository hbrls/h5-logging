var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('dist', function () {
  return gulp
    .src('./lib/index.js')
    .pipe(uglify({
      compress: { drop_console: true },
      output: { max_line_len: 80 },
    }))
    .pipe(rename('h5-logging.min.js'))
    .pipe(gulp.dest('./dist'));
});
