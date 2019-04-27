const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');

const build = () =>
  gulp
    .src('ig-css-addons.css')
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        postcssPresetEnv({
          stage: 3, // default is 3
          browsers: ['last 2 versions']
        }),
        cssnano({
          safe: true
        })
      ])
    )
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));

exports.build = build;

exports.default = build;
