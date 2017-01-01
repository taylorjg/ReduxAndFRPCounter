'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const del = require('del');
const webpack = require('webpack');

const dest = './server/public';

const configs = [
    require('./webpack.jquery.js'),
    require('./webpack.rxjs.js')
];

function createWebpackTasks() {
    return configs.map((config, index) => {
        const taskName = `webpack-${index}`;
        gulp.task(taskName, done => {
            webpack(config, (err, stats) => {
                if (err) {
                    console.log(`[${taskName}] ${err}`);
                }
                done();
            })
        });
        return taskName;
    });
}

gulp.task('clean', done =>
    del([dest], done)
);

gulp.task('webpack', ['clean'], done =>
    createWebpackTasks()
);

gulp.task('copyIndex', () =>
    gulp.src('./client/index.html').pipe(gulp.dest(dest))
);

gulp.task('build', () => {
    runSequence('clean', createWebpackTasks(), 'copyIndex');
});

gulp.task('default', ['build']);
