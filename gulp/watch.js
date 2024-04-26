'use strict';

import { watch, series } from 'gulp';
import browserSync from 'browser-sync';
import twig from './twig';
import css from './css';
import scripts from './scripts';
import { img, svg } from './img';
import { $, source, config } from './config';
import { reload } from './server';

function devWatch(cb) {
	browserSync(config.browserSync);
    watch(source.js, series(scripts, reload));
    watch([source.twig, source.components], series(twig, reload));
    watch(source.css, series(css, reload));
    watch(source.img, series(img, reload));
    watch(source.svg, series(svg, reload));

    cb()
}

export default devWatch;
