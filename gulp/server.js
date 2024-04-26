'use strict';

import browserSync from 'browser-sync';
import { config } from './config';

export const server = () => browserSync.init(config.browserSync);

export const reload = callback => {
    browserSync.reload();
    callback();
};
