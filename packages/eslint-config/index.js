'use strict';

const { join } = require('path');

module.exports = {
  extends: ['xo-space/esnext', join(__dirname, 'lib', 'common.js')],
  env: {
    node: false
  }
};
