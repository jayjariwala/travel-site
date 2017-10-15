const gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('default',() => {
	console.log("the task is running!")
})

gulp.task('html', () => {
	console.log("html task is running");
})

gulp.task('styles', () => {
	return gulp.src('./app/assets/css/styles.css')
		.pipe(postcss([cssvars,nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/css/'))

})

gulp.task('watch', () => {
	watch('./app/index.html', () => {
		gulp.start('html');
	})

	watch('./app/assets/css/**/*.css',() => {
		gulp.start('styles');
	})
})