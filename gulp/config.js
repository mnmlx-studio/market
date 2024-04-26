'use strict';

import moduleImporter from 'sass-module-importer';
import gulpLoadPlugins from 'gulp-load-plugins';
import { argv } from 'yargs';

const { PORT, OPEN } = process.env;
export const production = !!argv.production || !!argv.prod;
export const nominify = !!argv.nominify;
export const $ = gulpLoadPlugins();


export const source = {
    twig: './src/pages/*.twig',
    components: './src/components/**/*.twig',
    scss: './src/assets/scss/main.scss',
    css: './src/assets/scss/**/*.{sass,scss}',
    cjs: './src/assets/js/main.js',
    js: './src/assets/js/**/*.js',
    fonts: './src/assets/fonts/*.{eot,ttf,woff,woff2,svg}',
    img: './src/assets/images/**/*.{jpg,png,svg}',
    svg: './src/assets/svg/**/*.svg',
};

export const build = {
    dest: './build',
    css: './build/assets/css',
    scripts: './build/assets/js',
    assets: './build/assets',
	img: './build/assets/images',
	svg: './build/assets/svg',
	fonts: './build/assets/fonts',
	twig: './build'
};

export const config = {
    browserSync: {
        port: PORT || 3000,
        open: !!OPEN,
        notify: false,
        reloadOnRestart: true,
        ghostMode: false,
        server: {
            baseDir: build.dest,
            directory: true,
            serveStaticOptions: {
                extensions: ['html']
            }
        }
    },

    htmlBeatufify: {
        indentSize: 4
    },

    autoprefixer: {
        cascade: false
    },

    sass: {
        importer: moduleImporter(),
        outputStyle: production ? 'compressed' : 'expanded'
    },

    include: {
        extensions: 'js',
        hardFail: true,
        includePaths: [
            `${ __dirname }/../node_modules`,
            `${ __dirname }/../src/js`
        ]
    },

    babel: {
        presets: ['env']
    },

    imagemin: {
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        svgoPlugins: [{
                removeViewBox: false
            }
        ]
    }
};
