'use strict';

const { join } = require('path');

module.exports = {
  extends: [
    'xo-space/esnext',
    join(__dirname, 'lib', 'common.js'),
    require.resolve('eslint-config-airbnb-base/rules/es6')
  ],
  env: {
    node: false
  }
};
