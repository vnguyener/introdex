var gulp = require("gulp");
var del = require("del");
var tsc = require("gulp-typescript");
var tsProject = tsc.createProject("tsconfig.json");
var tslint = require("gulp-tslint");


// cleaning
gulp.task("clean", function() {
   return del(["build"]) ;
});

// compiling typescript
gulp.task("compile", function() {
   var tsResult = gulp.src("src/**/*.ts")
        .pipe(tsc(tsProject));
   return tsResult.js
        .pipe(gulp.dest("build"));
});

gulp.task("resources", function() {
   return gulp.src(["src/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build"));
});

gulp.task("libs", function() {
    return gulp.src([
            "es6-shim/es6-shim.min.js",
            "systemjs/dist/system-polyfills.js",
            "angular2/bundles/angular2-polyfills.js",
            "angular2/es6/dev/src/testing/shims_for_IE.js",
            "systemjs/dist/system.src.js",
            "rxjs/bundles/Rx.js",
            "angular2/bundles/angular2.dev.js",
            "angular2/bundles/router.dev.js"
        ], {cwd: "node_modules/**"})
        .pipe(gulp.dest("build/lib"));
});

gulp.task("build", ["compile", "resources", "libs"], function() {
    console.log("Typescript.. Jypescript.. Japescript.. Javscript.. Javascript ...");
});