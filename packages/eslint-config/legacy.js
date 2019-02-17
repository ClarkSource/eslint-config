'use strict';

const { join } = require('path');

module.exports = {
  extends: ['xo-space', join(__dirname, 'lib', 'common.js')],
  env: {
    es6: false
  }
};
