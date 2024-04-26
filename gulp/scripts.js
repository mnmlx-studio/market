'use strict';

import { src, dest } from 'gulp';
import { nominify, $, production, source, build, config } from './config';

// Scripts
function scripts(cb) {
	return src(source.cjs)
		    .pipe($.plumber())
		    .pipe($.include(config.include)).on('error', (e) => console.log(e))
		    .pipe($.if(!production, $.sourcemaps.init()))
		    .pipe($.babel(config.babel))
		    .pipe(($.if(!production, $.sourcemaps.write('.'))))
		    .pipe(dest(build.scripts));
	cb()
}

export default scripts