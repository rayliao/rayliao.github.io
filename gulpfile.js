var gulp = require('gulp')
var gutil = require('gulp-util')
var browserSync = require('browser-sync').create()
var watchify = require('watchify')
var babelify = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')

var path = gutil.env.path || 'app'
var config = {
    js: 'app/scripts',
    app: 'app/scripts/app.js',
}

gulp.task('browserSync', function () {
    browserSync.init({
        port: 9000,
        server: {
            baseDir: 'app'
        }
    })
})

gulp.task('compile', function () {
    var bundler = watchify(browserify(config.app, {
        debug: true
    }).transform(babelify))

    bundler.bundle()
        .on('error', function (err) {
            console.error(err)
            this.emit('end')
        })
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest(config.js))
})

gulp.task('styles', function () {
    var sass = require('gulp-sass');

    gulp.src('app/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/styles'));
});

gulp.task('pug', function () {
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

gulp.task('watch', ['styles', 'pug', 'browserSync'], function () {

    gulp.watch('app/styles/*.scss', ['styles']);
    gulp.watch('app/scripts/src/*.js', ['babel']);
    gulp.watch('app/shoot/**/*.pug', ['pug']);

    gulp.watch([
        'app/**/*.html',
        'app/styles/*.css',
        'app/scripts/*.js'
    ], browserSync.reload);
});

gulp.task('default', ['clean'], function () {
    gulp.run('build');
});

gulp.task('clean', function () {
    var clean = require('gulp-clean');
    return gulp.src('dist', { read: false })
        .pipe(clean());
});

gulp.task('build', function () {
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
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));

});