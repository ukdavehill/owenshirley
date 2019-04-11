const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const pump = require('pump');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const uglifycss = require('gulp-uglifycss');
var babel = require('gulp-babel');

// COPY HTML TO SRC FOLDER
gulp.task('copyHtml', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// OPTIMIZE IMAGES
gulp.task('imageMin', () => {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// MINIMIZE JS
gulp.task('minJs', (cb) => {
    return pump([
        gulp.src('src/js/*.js'),
        babel({
            presets: ['@babel/env']
        }),
        uglify(),
        gulp.dest('dist/js')
    ],
        cb
    );
});

// COMPILE SASS
gulp.task('sass', () => {
    return gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', gulp.parallel('copyHtml', 'imageMin', 'minJs', 'sass'));

gulp.task('watch', () => {
    gulp.watch('src/*.html', gulp.parallel('copyHtml'));
    gulp.watch('src/js/*', gulp.parallel('minJs'));
    gulp.watch('src/images/*', gulp.parallel('imageMin'));
    gulp.watch('src/sass/*.scss', gulp.parallel('sass'));

})


