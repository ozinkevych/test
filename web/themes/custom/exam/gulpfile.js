const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

const paths = {
  scss: './scss/**/*.scss',
  css: './css'
};

gulp.task('sass', function() {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.css));
});

gulp.task('default', gulp.series('sass'));
