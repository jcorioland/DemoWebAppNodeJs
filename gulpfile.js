var gulp = require('gulp'),
	mocha = require('gulp-mocha');
	
gulp.task('tests', function(){
	gulp.src('tests/sample.js')
		.pipe(mocha());
});