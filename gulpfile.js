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
    const sass = require('gulp-sass');

    gulp.src('app/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

gulp.task('pug', function(){
    const pug = require('gulp-pug');

    gulp.src('app/shoot/*.pug')
        .pipe(pug({
            pretty: '\t'
        }))
        .pipe(gulp.dest('app/shoot/'));
});

gulp.task('babel', function () {
    const babel = require('gulp-babel');

    return gulp.src('app/js/src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['styles', 'pug', 'connect', 'serve'], function () {

    var livereload = require('gulp-livereload');
    livereload.listen();

    gulp.watch('app/css/*.scss', ['styles']);
    gulp.watch('app/js/src/*.js', ['babel']);
    gulp.watch('app/shoot/**/*.pug', ['pug']);
    
    gulp.watch([
        'app/**/*.html',
        'app/css/*.css',
        'app/js/*.js'
    ]).on('change', function (file) {
        livereload.changed(file.path);
    });
});

gulp.task('default', ['clean'], function(){
    gulp.run('build');
});

gulp.task('clean', function(){
    const clean = require('gulp-clean');
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('build', function(){
    const csso = require('gulp-csso');
    const htmlmin = require('gulp-htmlmin');
    const uglify = require('gulp-uglify');

    gulp.src('app/*')
    .pipe(gulp.dest('dist/'));

    gulp.src('app/img/**')
    .pipe(gulp.dest('dist/img/'));

    gulp.src('app/fonts/**')
    .pipe(gulp.dest('dist/fonts/'));

    gulp.src('app/css/*.css')
    .pipe(csso())
    .pipe(gulp.dest('dist/css/'));

    gulp.src('app/js/**')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));

    gulp.src('app/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));

});