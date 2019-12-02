const gulp = require('gulp');
const less = require('gulp-less');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
function clean(done) {
    del.sync('build');
    done();
}

function handleless(done) {
    gulp.src(['src/**/*.less'])
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('build'));
    done();
};
function move(done) {
    gulp.src(['src/**/*'])
        .pipe(gulp.dest('build'));
    done();
}
 
function handel(done){
    gulp.src("src/**/*.js")
    // .pipe(babelminify({
    //   mangle: {
    //     keepClassName: true
    //   }
    // },{
    //     sourceType:'module'
    // }))
    .pipe(gulp.dest("build"));
    done();
}

function watch(done){
    const watcher = gulp.watch('src/**/*.js');
    watcher.on('change', function (path, stats) {
        console.log(`File ${path} was changed`);
    });

    watcher.on('add', function (path, stats) {
        console.log(`File ${path} was added`);
    });

    watcher.on('unlink', function (path, stats) {
        console.log(`File ${path} was removed`);
    });

      watcher.close();
  
};

exports.default = gulp.series(clean, gulp.parallel(handel,handleless));
exports.move = move;
exports.watch = watch;


