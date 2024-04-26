'use strict';

import { src, dest } from 'gulp';
import { nominify, $, production, source, build, config } from './config';

// CSS
function css(cb) {
	return src(source.scss)
		    .pipe($.plumber())
		    .pipe($.if(!production, $.sourcemaps.init()))
		    .pipe($.sass(config.sass).on('error', $.sass.logError))
		    .pipe($.autoprefixer(config.autoprefixer))
		    .pipe($.if(production && !nominify, $.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError)))
		    .pipe($.if(!production, $.sourcemaps.write('.')))
		    .pipe(dest(build.css));

    cb()
}

export default css;
