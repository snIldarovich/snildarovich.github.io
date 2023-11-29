const { src, dest, watch, parallel, series } = require("gulp");

// const scss = require('gulp-sass'); //--старое подключение gulp-saas обновился до пятой версии и теперь лучше в связке с sass
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
// const imagemin     = require('gulp-imagemin');
const avif = require("gulp-avif");
const webp = require("gulp-webp");
// const newer = require("gulp-newer");
const fonter = require("gulp-fonter-unx");
const ttf2woff2 = require("gulp-ttf2woff2");
// const svgSprite    = require('gulp-svg-sprite');
const del = require("del");
const browserSync = require("browser-sync").create();
// const include      = require('gulp-include');

// function pages() {
//    return src('app/pages/*.html')
//     .pipe(include ({
//       includePath: 'app/components'
//     }))
//     .pipe(dest('app'))
//     .pipe(browserSync.stream())
// }

function fonts() {
  return src("app/fonts/src/*.*")
    .pipe(
      fonter({
        formats: ["woff", "ttf"],
      })
    )
    .pipe(src("app/fonts/*.ttf"))
    .pipe(ttf2woff2())
    .pipe(dest("app/fonts"));
}

function imagesWebp() {
  return src([`app/images/**/**.{jpg,jpeg,png}`])
    .pipe(webp())
    .pipe(dest("app/images"));
}
function imagesAvif() {
  return src([`app/images/**/**.{jpg,jpeg,png}`])
    .pipe(avif())
    .pipe(dest("app/images"));
}
// function images() {
//   return src(['app/images/src/*.*','!app/images/src/*.svg'])
//   .pipe(newer('app/images'))
//   .pipe(avif({quality : 50}))

//   .pipe(src('app/images/src/*.*'))
//   .pipe(newer('app/images'))
//   .pipe(webp())

//   .pipe(src('app/images/src/*.*'))
//   .pipe(newer('app/images'))
//   .pipe(imagemin(
//           [
//             imagemin.gifsicle({ interlaced: true }),
//             imagemin.mozjpeg({ quality: 75, progressive: true }),
//             imagemin.optipng({ optimizationLevel: 5 }),
//             imagemin.svgo({
//               plugins: [
//                 { removeViewBox: true },
//                 { cleanupIDs: false }
//               ]
//             })
//           ]
//         ))

//   .pipe(dest('app/images'))
// }

// function sprite() {
//   return src('app/images/*.svg')
//   .pipe(svgSprite({
//     mode: {
//       stack: {
//         sprite: '../sprite.svg',
//         example: true,
//       }
//     }
//   }))
//   .pipe(dest('app/images'))
// }

function styles() {
  return src("app/scss/style.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 version"],
        grid: true,
      })
    )
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function scripts() {
  return src(["node_modules/jquery/dist/jquery.js", "app/js/main.js"])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function watching() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
    notify: false,
  });
  watch(["app/scss/**/*.scss"], styles);
  watch(["app/images/src"], imagesWebp);
  watch(["app/images/src"], imagesAvif);
  watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
  // watch(['app/components/*', 'app/pages/*'], pages);
  watch(["app/**/*.html"]).on("change", browserSync.reload);
}
function cleanDist() {
  return del("dist");
}
function building() {
  return src(
    [
      "app/css/style.min.css",
      "app/images/*.*",
      "!app/images/*.svg",
      // 'app/images/sprite.svg',
      "app/fonts/*.*",
      "app/js/main.min.js",
      "app/**/*.html",
    ],
    { base: "app" }
  ).pipe(dest("dist"));
}

exports.styles = styles;
// exports.images = images;
exports.imagesWebp = imagesWebp;
exports.imagesAvif = imagesAvif;
exports.fonts = fonts;
// exports.pages       = pages;
// exports.sprite      = sprite;
exports.watching = watching;
exports.building = building;
exports.scripts = scripts;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, building);

exports.default = parallel(styles, imagesWebp, imagesAvif, scripts, watching);
// exports.default     = parallel(styles, images, scripts, pages, watching);
