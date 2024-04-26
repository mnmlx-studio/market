'use strict';

import { src, dest } from 'gulp';
import { $, source, build, config } from './config';

// HTML
function twig(cb) {
	return src(source.twig).pipe($.plumber()).pipe($.twig()).pipe($.htmlBeautify(config.htmlBeatufify)).pipe(dest(build.dest))
	cb()
}

export default twig;
