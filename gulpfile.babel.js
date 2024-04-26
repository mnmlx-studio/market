'use strict';

import { series, parallel, src, dest } from 'gulp';
import { $, source, build, config } from './gulp/config';

import clean from './gulp/clean';
import { img, svg } from './gulp/img';
import twig from './gulp/twig';
import css from './gulp/css';
import scripts from './gulp/scripts';
import devWatch from './gulp/watch';

// task('build', build);
// task('clean', clean);

exports.default = series(clean, parallel(img, svg, twig, css, scripts), devWatch)
exports.dev = series(clean, parallel(img, svg, twig, css, scripts), devWatch)
exports.build = series(clean, series(parallel(img, svg, twig, css, scripts)))
exports.clean = series(clean)