'use strict';

import { src, dest } from 'gulp';
import { $, production, source, build, config } from './config';

function img(cb) {
	return src(source.img)
    		.pipe($.plumber())
    		.pipe($.if(production, $.imagemin(config.imagemin)))
    		.pipe(dest(build.img));

    cb()
}

function svg(cb) {
	return src(source.svg)
    		.pipe($.plumber())
    		.pipe($.if(production, $.imagemin(config.imagemin)))
    		.pipe(dest(build.svg));

    cb()
}

export { img, svg };
