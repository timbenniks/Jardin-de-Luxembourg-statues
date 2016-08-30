var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell')

var stylus = require('gulp-stylus');


var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']

,
	'style': {
		main: './public/styles/site.styl',
		all: './public/styles/**/*.styl',
		output: './public/styles/'
	}

};


gulp.task('watch:stylus', function () {
	gulp.watch(paths.style.all, ['stylus']);
});

gulp.task('stylus', function () {
	gulp.src(paths.style.main)
		.pipe(stylus())
		.pipe(gulp.dest(paths.style.output));
});


gulp.task('runKeystone', shell.task('nodemon keystone.js'));
gulp.task('watch', [

  'watch:stylus',

]);

gulp.task('default', ['watch', 'runKeystone']);
