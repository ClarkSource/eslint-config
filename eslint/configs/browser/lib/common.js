'use strict';

module.exports = {
  extends: [require.resolve('eslint-config-xo/browser')],
  env: {
    node: false,
    browser: true,
  },
  rules: {
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-text-content': 'error',
  },
};
