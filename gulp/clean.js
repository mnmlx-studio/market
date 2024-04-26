'use strict';

import del from 'del';
import { build } from './config';

// Clean
function clean(cb, done) {
	return del([build.dest], done);
	cb()
}

export default clean;