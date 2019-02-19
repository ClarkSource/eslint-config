'use strict';

module.exports = {
  extends: [require.resolve('./lib/common'), '@clark'],
  rules: {
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-query-selector': 'error'
    // 'unicorn/prefer-node-remove': 'error'
  }
};
