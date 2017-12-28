const gulp = require("gulp"),
      browserSync = require("browser-sync"),
      sass = require("gulp-sass"),
      pref = require("gulp-autoprefixer"),
      sourcemaps= require('gulp-sourcemaps');

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('browser-sync', ()=> {
    browserSync.init({
        server: 'app'
    });
});

gulp.task('styles', ()=>{
gulp.src(['app/scss/*.scss'])
  .pipe(sass())
  .pipe(pref("last 2 version", "> 5%", "ie 8", "ie 7"))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('app/css/'))
  .pipe(browserSync.reload({stream:true}))
});

gulp.task('run', ['browser-sync'], function(){
  gulp.watch("app/**/*.js", ['bs-reload']);
  gulp.watch("app/**.html", ['bs-reload']);
  gulp.watch("app/scss/*.scss", ['styles']);
})
