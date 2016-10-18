'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');

const PORT = 3000;


gulp.task('connect', () => {
  connect.server({
    root: 'src',
    livereload: true,
    port: PORT,
  });
});

gulp.task('html', () => {
  gulp.src('./src/*.html')
    .pipe(connect.reload());
});

gulp.task('html:watch', () => {
  gulp.watch(['./src/*.html'], ['html']);
});

gulp.task('watch', ['html:watch']);

gulp.task('server', ['connect', 'watch']);
gulp.task('default', ['server']);
