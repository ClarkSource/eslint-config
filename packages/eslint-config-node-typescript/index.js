'use strict';

module.exports = {
  extends: ['@clarkapp/node', '@clarkapp/typescript'],
  env: {
    node: true,
    browser: false
  },
  rules: {
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off'
  }
};
