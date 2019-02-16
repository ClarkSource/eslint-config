'use strict';

module.exports = {
  plugins: ['node'],
  extends: ['@clarkapp', 'plugin:node/recommended'],
  env: {
    node: true,
    browser: false
  },
  rules: {
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-text-content': 'error'
  }
};
