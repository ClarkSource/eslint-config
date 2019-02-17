'use strict';

const { join } = require('path');

module.exports = {
  extends: [join(__dirname, 'lib', 'common.js'), '@clarkapp'],
  rules: {
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-query-selector': 'error'
    // 'unicorn/prefer-node-remove': 'error'
  }
};
