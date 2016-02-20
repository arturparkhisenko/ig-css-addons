'use strict';

import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import rename from 'gulp-rename';
import cssnano from 'cssnano';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('default', () =>
  gulp.src('ig-css-addons.css')
  .pipe(sourcemaps.init())
  .pipe(postcss([
    autoprefixer({
      browsers: ['last 2 versions']
    }),
    cssnano()
  ]))
  .pipe(rename({
    suffix: '.min',
  }))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./'))
);
