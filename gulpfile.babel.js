'use strict';

import gulp from 'gulp';
import rename from 'gulp-rename';
import minifyCSS from 'gulp-minify-css';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('default', () =>
  gulp.src('ig-css-addons.css')
  .pipe(rename({
    suffix: ".min",
  }))
  .pipe(sourcemaps.init())
  .pipe(minifyCSS())
  .pipe(gulp.dest('./'))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./'))
);
