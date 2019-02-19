'use strict';

module.exports = {
  extends: ['@clark/node', '@clark/typescript'],
  env: {
    node: true,
    browser: false
  },
  rules: {
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off'
  }
};
