'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');

var path = gutil.env.path || 'app';

gulp.task('connect', function () {
    
    var connect = require('connect'),
        serveStatic = require('serve-static');

    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(serveStatic(__dirname));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', function () {
    require('opn')('http://localhost:9000/app/index.html');
});

gulp.task('styles', function() {
    var sass = require('gulp-sass');

    gulp.src('app/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/styles'));
});

gulp.task('pug', function(){
    var pug = require('gulp-pug');

    gulp.src('app/shoot/*.pug')
        .pipe(pug({
            pretty: '\t'
        }))
        .pipe(gulp.dest('app/shoot/'));
});

gulp.task('babel', function () {
    var babel = require('gulp-babel');

    return gulp.src('app/scripts/src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('app/scripts'));
});

gulp.task('watch', ['styles', 'pug', 'connect', 'serve'], function () {

    var livereload = require('gulp-livereload');
    livereload.listen();

    gulp.watch('app/styles/*.scss', ['styles']);
    gulp.watch('app/scripts/src/*.js', ['babel']);
    gulp.watch('app/shoot/**/*.pug', ['pug']);
    
    gulp.watch([
        'app/**/*.html',
        'app/styles/*.css',
        'app/scripts/*.js'
    ]).on('change', function (file) {
        livereload.changed(file.path);
    });
});

gulp.task('default', ['clean'], function(){
    gulp.run('build');
});

gulp.task('clean', function(){
    var clean = require('gulp-clean');
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('build', function(){
    var csso = require('gulp-csso');
    var htmlmin = require('gulp-htmlmin');
    var uglify = require('gulp-uglify');

    gulp.src('app/*')
    .pipe(gulp.dest('dist/'));

    gulp.src('app/images/**')
    .pipe(gulp.dest('dist/images/'));

    gulp.src('app/fonts/**')
    .pipe(gulp.dest('dist/fonts/'));

    gulp.src('app/styles/*.css')
    .pipe(csso())
    .pipe(gulp.dest('dist/styles/'));

    gulp.src('app/scripts/**')
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));

    gulp.src('app/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));

});