const gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', () => {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	})

	watch('./app/assets/css/**/*.css',() => {
		gulp.start('cssInject');
	})
})



gulp.task('cssInject', ['styles'] , () => {
	return gulp.src('./app/temp/css/styles.css')
			.pipe(browserSync.stream());
})