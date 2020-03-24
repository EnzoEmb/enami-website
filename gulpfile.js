const gulp = require('gulp');
const terser = require('gulp-terser');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');

// compile js
gulp.task('js', function (done) {
    gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(terser())
        .pipe(gulp.dest('./dist/assets/js'));

    done();
});

// compile sass
gulp.task('sass', function (done) {
    gulp.src('src/css/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/assets/css'));

    done();
});

// minify html
gulp.task('html', function (done) {
    gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist/'));

    done();
});

// copy other assets
gulp.task('copy', function (done) {
    gulp.src(['src/fonts/**/*'])
        .pipe(gulp.dest('dist/assets/fonts'));
    gulp.src(['src/favicon.svg'])
        .pipe(gulp.dest('dist/'));
    done();
});

//watch
gulp.task('dev', gulp.series(['js', 'sass', 'html', 'copy'], function dev(done) {
    gulp.watch(['src/js/*.js'], gulp.series(['js']));
    gulp.watch(['src/css/**/*'], gulp.series(['sass']));
    gulp.watch(['src/*.html'], gulp.series(['html']));
    done();
}));

// build
gulp.task('build', gulp.series(['js', 'sass', 'html'], function (done) {
    done();
}));

gulp.task('default', gulp.series(['dev']));