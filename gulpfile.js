var gulp = require('gulp'),
	scss = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function() {
	return gulp.src('scss/*.scss')
	.pipe(scss())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) 
	.pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['scss']);
});

gulp.task('default', ['watch']);