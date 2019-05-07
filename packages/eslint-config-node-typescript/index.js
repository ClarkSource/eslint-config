'use strict';

module.exports = {
  extends: ['@clark/node', '@clark/typescript'],
  // eslint-disable-next-line unicorn/prevent-abbreviations
  env: {
    node: true,
    browser: false
  },
  rules: {
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off'
  }
};
