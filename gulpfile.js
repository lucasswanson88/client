var gulp = require('gulp');
var replace = require('gulp-string-replace');

gulp.task('updateIndexHtml', function () {
    gulp.src(['./dist/index.html'])
        .pipe(replace('%BuildFolder%', process.env.BUILD_BUILDNUMBER))
        .pipe(gulp.dest('dist'));
});