var gulp = require('gulp');
var connect = require('gulp-connect');

var paths = {
    src: 'public'
};

var collections = {
    html: ['./' + paths.src + '/*.html', './' + paths.src + '/*.shtml']
};


gulp.task('default',  ['connect']);

gulp.task('connect', function() {
    connect.server({
        root: paths.src,
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src(collections.html)
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(collections.html, ['html']);
});

gulp.task('default', ['connect', 'watch']);