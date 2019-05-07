'use strict';

module.exports = {
  extends: [require.resolve('./lib/common'), '@clark/eslint-config/legacy'],
  // eslint-disable-next-line unicorn/prevent-abbreviations
  env: {
    es6: false
  },
  rules: {
    'unicorn/prefer-exponentiation-operator': 'off',
    'unicorn/prefer-node-append': 'off',
    'unicorn/prefer-query-selector': 'off'
    // 'unicorn/prefer-node-remove': 'off'
  }
};
