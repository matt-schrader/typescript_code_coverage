var gulp    = require('gulp');
var sync    = require('run-sequence');
var webpack = require('webpack-stream');
var karma = require('karma').Server;
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

var paths = {
    entry: __dirname + '/src/app.ts',
    dest: 'build'
};

/**
 * Default task to build and test the application
 */
gulp.task('default', function(done){
    sync('build', 'test', 'coverage', done);
});

/**
 * Build task
 */
gulp.task('build', function(){
    return gulp.src(paths.entry)
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest(paths.dest));
});

/**
 * Test Task
 */
gulp.task('test', function(done){
    new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function(error){
        if (error){
            //log error to the console for now
            console.log(error);
        }
        done();
    }).start();
});

gulp.task('coverage', function() {
  return gulp.src('coverage/Chrome 52.0.2743 (Mac OS X 10.11.5)/coverage-final.json')
      .pipe(remapIstanbul({
        reports: {
          'json': 'coverage.json',
          'html': 'html-report'
        },
        exclude: 'spec.bundle.ts',
        fail: true
      }));
});
