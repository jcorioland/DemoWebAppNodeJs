var gulp = require('gulp'),
	mocha = require('gulp-mocha'),
    zip = require('gulp-zip');
	
gulp.task('tests', function(){
	gulp.src('tests/sample.js')
		.pipe(mocha());
});

gulp.task('zip', function() {
    gulp.src('./**/*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'));
});