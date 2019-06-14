'use strict';

module.exports = {
  extends: ['@clark/node', '@clark/typescript'],
  // eslint-disable-next-line unicorn/prevent-abbreviations
  env: {
    node: true,
    browser: false
  },
  settings: {
    node: {
      /**
       * This defuses `node/shebang` for `.ts` files  whose `.js` output is in
       * the `package.json`'s `bin`.
       *
       * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md#shared-settings
       */
      convertPath: {
        '**/*.ts': ['^(.+?)\\.ts$', '$1.js']
      }
    }
  },
  rules: {
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off'
  }
};
