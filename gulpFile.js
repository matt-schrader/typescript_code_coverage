var gulp    = require('gulp');
var sync    = require('run-sequence');
var webpack = require('webpack-stream');
var karma = require('karma').Server;
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

var paths = {
    entry: __dirname + '/src/app.ts',
    dest: 'build',

    testentry: './src/spec.bundle.ts',
    testdest: 'build-test'
};

/**
 * Default task to build and test the application
 */
gulp.task('default', function(done){
    sync('build', 'test', 'coverage', done);
});

gulp.task('test', function(done) {
  sync('test-build', 'test-run', 'coverage', done);
});

/**
 * Build task
 */
gulp.task('build', function(){
    return gulp.src(paths.entry)
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('test-build', function() {
  return gulp.src(paths.testentry)
      .pipe(webpack(require('./webpack.config')))
      .pipe(gulp.dest(paths.testdest));
});

/**
 * Test Task
 */
gulp.task('test-run', function(done) {
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
  return gulp.src('coverage/coverage-final.json')
      .pipe(remapIstanbul({
        reports: {
          'json': 'coverage/istanbul-coverage.json',
          'html': 'html-report'
        },
        exclude: 'spec.bundle.ts',
        fail: true
      }));
});
