'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const del = require('del');
const webpack = require('webpack');

const dest = './server/public';

const webPackConfigs = [
    require('./webpack.jquery.js'),
    require('./webpack.rxjs.js'),
    require('./webpack.react.js'),
    require('./webpack.ng1.js'),
    require('./webpack.ng2.js'),
    require('./webpack.elm.js')
];

function createWebpackTasks() {
    return webPackConfigs.map((config, index) => {
        const taskName = `webpack-${index}`;
        gulp.task(taskName, done => {
            webpack(config, (err, stats) => {
                if (err)
                    console.log(`[${taskName}] ${err}`);
                else {
                    const errors = stats.toString("errors-only");
                    if (errors) console.log(`[${taskName}] ${errors}`);
                }
                done();
            })
        });
        return taskName;
    });
}

gulp.task('clean', done => {
    return del(dest, done);
});

gulp.task('webpack', () => {
    return createWebpackTasks();
});

gulp.task('copyTopLevelFiles', () => {
    const files = [
        './client/index.html',
        './client/styles.css'
    ];
    return gulp.src(files).pipe(gulp.dest(dest));
});

gulp.task('build', () => {
    return runSequence('clean', createWebpackTasks(), 'copyTopLevelFiles');
});

gulp.task('default', ['build']);
