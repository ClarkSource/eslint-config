'use strict';

module.exports = {
  extends: ['xo-space/browser'],
  env: {
    node: false,
    browser: true
  },
  rules: {
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-text-content': 'error'
  }
};
