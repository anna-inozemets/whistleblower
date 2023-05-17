const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const replace = require('gulp-replace');
const browserSync = require('browser-sync').create();

const paths = {
  html: {
    src: 'src/*.html',
    dest: 'public'
  },
  scss: {
    src: 'src/styles/**/*.scss',
    dest: 'public/styles',
    output: 'main.css'
  },
  js: {
    src: 'src/scripts/**/*.js',
    dest: 'public/scripts',
    output: 'main.js'
  },
  img: {
    src: 'src/images/**/*.{jpg,jpeg,png,gif,svg}',
    dest: 'public/images'
  }
};

const html = () => {
  return src('./src/*.html')
    .pipe(replace('<link rel="stylesheet" href="./styles/main.scss">', '<link rel="stylesheet" href="./styles/main.css">'))
    .pipe(dest('./public'))
    .pipe(browserSync.stream());
};

const js = () => {
  return src(paths.js.src)
    .pipe(dest(paths.js.dest))
    .pipe(browserSync.stream());
};

const scss = () => {
  return src(paths.scss.src)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat(paths.scss.output))
    .pipe(dest(paths.scss.dest))
    .pipe(browserSync.stream());
};

const img = () => {
  return src(paths.img.src)
    .pipe(imagemin())
    .pipe(dest(paths.img.dest))
    .pipe(browserSync.stream());
};

const server = () => {
  browserSync.init({
    server: {
      baseDir: './public',
    }
  });
};

const watcher = () => {
  watch(paths.img.src, img);
  watch(paths.scss.src, series(scss, html));
  watch(paths.js.src, js);
};

exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.server = server;
exports.watcher = watcher;
exports.dev = series(
  scss,
  parallel(js, html, img),
  parallel(watcher, server)
);
