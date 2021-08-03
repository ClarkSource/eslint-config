'use strict';

// @TODO Replace with
// https://github.com/import-js/eslint-plugin-import
// https://github.com/alexgorbatchev/eslint-import-resolver-typescript
const disableNodeRequireAndImport = {
  'node/no-extraneous-require': 'off',
  'node/no-missing-require': 'off',
  'node/no-unpublished-require': 'off',
  'node/no-extraneous-import': 'off',
  'node/no-missing-import': 'off',
  'node/no-unpublished-import': 'off',
};

module.exports = {
  extends: ['@clark/node', '@clark/typescript'],
  env: {
    node: true,
    browser: false,
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
        '**/*.ts': ['^(.+?)\\.ts$', '$1.js'],
      },

      /**
       * This defuses `node/no-missing-import` for `.ts` files .
       *
       * @see https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md#shared-settings
       */
      tryExtensions: ['.js', '.json', '.node', '.ts', '.d.ts'],
    },
  },
  rules: {
    ...disableNodeRequireAndImport,

    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
  },

  /**
   * Since the order of application is `node` and _then_ `typescript`, rules
   * set in `typescript`, override overrides in `node`. While we in general
   * want any regular rules in `typescript` to override any regular rules in
   * `node`, we want the overrides in `node` to take effect.
   *
   * To achieve this, we include the overrides again.
   *
   * @see https://eslint.org/docs/user-guide/migrating-to-6.0.0#-overrides-in-an-extended-config-file-can-now-be-overridden-by-a-parent-config-file
   */
  overrides: [
    ...require('@clark/eslint-config-typescript').overrides,
    ...require('@clark/eslint-config-node').overrides,
    {
      files: ['*.d.ts'],
      rules: { ...disableNodeRequireAndImport },
    },
  ],
};
