import gulp from 'gulp';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';
// Перенос и оптимизация картинок
gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|svg|ico)')
  // Кэширование картинок проходящих оптимизацию
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/assets/images'));
});