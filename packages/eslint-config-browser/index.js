'use strict';

module.exports = {
  extends: [require.resolve('./lib/common'), '@clark'],
  rules: {
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-text-content': 'error'
  }
};
