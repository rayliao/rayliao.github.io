'use strict';
var gulp = require('gulp');

gulp.task('styles', function () {
    var sass = require('gulp-sass');
    gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    //TODO
});