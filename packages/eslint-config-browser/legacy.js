'use strict';

const { join } = require('path');

module.exports = {
  extends: [
    join(__dirname, 'lib', 'common.js'),
    '@clarkapp/eslint-config/legacy'
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
