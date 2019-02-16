'use strict';

const { join } = require('path');

module.exports = {
  extends: [
    '@clarkapp/eslint-config/legacy',
    join(__dirname, 'lib', 'common.js')
  ],
  env: {
    es6: false
  },
  rules: {
    'unicorn/prefer-exponentiation-operator': 'off',
    'unicorn/prefer-node-append': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prefer-node-remove': 'off'
  }
};
