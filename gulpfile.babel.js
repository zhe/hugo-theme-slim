// Gulpfile.js for Hugo Theme – Slim
// Git repo: https://github.com/zhe/hugo-theme-slim

// This gulpfile makes use of new JavaScript features.
// Babel handles this without us having to do anything. It just works.
// You can read more about the new JavaScript features here:
// https://babeljs.io/docs/learn-es2015/

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();
const options = {

};

// Compile and prefix stylesheets
gulp.task('style', () => {
  return gulp.src('src/sass/*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass().sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.'],
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 version'],
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('static/css'));
});
