const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const pump = require('pump');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const uglifycss = require('gulp-uglifycss');

// COPY HTML TO SRC FOLDER
gulp.task('copyHtml', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

// OPTIMIZE IMAGES
gulp.task('imageMin', () => {
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// MINIMIZE JS
gulp.task('minJs', (cb) => {
    pump([
        gulp.src('src/js/*.js'),
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
    gulp.watch('src/js/*', gulp.parallel('minJs'));
    gulp.watch('src/images/*', gulp.parallel('imageMin'));
    gulp.watch('src/sass/*.scss', gulp.parallel('sass'));
    gulp.watch('src/*.html', gulp.parallel('copyHtml'));
})


