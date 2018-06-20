var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    uglify = require('gulp-uglifyjs'),
    minify = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename');

gulp.task('concatjs', function(){
    gulp.src('sources/scripts/**/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('sass', function(){
    gulp.src('sources/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concatCss('bundle.css'))
        .pipe(minify({keepBreaks: true}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('app/css'));

});

gulp.task('imagemin', function(){
    gulp.src('sources/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/images'));
});

gulp.task('default', function(){
    gulp.watch('sources/scss/**/*.scss', ['sass']);
    gulp.watch('sources/scripts/**/*.js', ['concatjs']);
    gulp.watch('sources/images/*', ['imagemin']);
})

