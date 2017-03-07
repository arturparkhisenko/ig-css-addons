'use strict';

// import gulp from 'gulp';
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

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
