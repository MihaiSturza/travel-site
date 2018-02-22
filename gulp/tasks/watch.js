var gulp = require('gulp'),
    watch = require('gulp-watch');
   /* browserSync = require('browser-sync').create();*/

gulp.task('html', function() {
	console.log('Amin');
});
   
gulp.task('watch', function() {
    /*browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    }); */
    
    watch('./app/index.html', function() {
     gulp.start('html'); /*here, we would have instead browserSync.reload(); */
    });
    
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles'); /* here, if we want to use browserSync we'll place cssInject instead of styles, as in the cssInject task, it will only run after the styles would run */
    });
});


/*
gulp.task('cssInject', ['styles'], function() {
    return gulp.scr('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});*/

//I chose not to use browserSync for now as brackets has a browsersync included - realtime preview. Note that browserSync is a valuable tool also for cross browser compatibility testing, also while running it with bash we can take the adress and place it in a mobile device to view the webpage