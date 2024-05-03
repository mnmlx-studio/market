'use strict';

import { src, dest } from 'gulp';
import { nominify, $, production, source, build, config } from './config';

// Scripts
function scripts(cb) {
	return src(source.js)
		    .pipe($.plumber())
		    .pipe($.include(config.include)).on('error', (e) => console.log(e))
		    .pipe($.babel(config.babel))
		    .pipe(dest(build.scripts));
	cb()
}

export default scripts