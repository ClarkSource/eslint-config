'use strict';

module.exports = {
  extends: ['xo-space/browser'],
  // eslint-disable-next-line unicorn/prevent-abbreviations
  env: {
    node: false,
    browser: true
  },
  rules: {
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-text-content': 'error'
  },
  overrides: [
    {
      files: ['**/.eslintrc.js'],
      env: {
        node: true,
        browser: false
      }
    }
  ]
};
