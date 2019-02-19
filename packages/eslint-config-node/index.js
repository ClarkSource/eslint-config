'use strict';

module.exports = {
  plugins: ['node'],
  extends: ['@clark', 'plugin:node/recommended'],
  env: {
    node: true,
    browser: false
  },
  rules: {
    'unicorn/prefer-add-event-listener': 'off',
    'unicorn/prefer-node-append': 'off',
    'unicorn/prefer-query-selector': 'off',
    // 'unicorn/prefer-node-remove': 'off',
    'unicorn/prefer-text-content': 'off'
  }
};
