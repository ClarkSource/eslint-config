'use strict';

const ruleOverrides = {};

module.exports = {
  extends: [require.resolve('@clark/eslint-config-ember/addon')],
  overrides: [
    {
      files: '**/*.ts',
      extends: [require.resolve('@clark/eslint-config-typescript')],
      rules: { ...ruleOverrides },
    },
    {
      files: ['addon/**/*.ts'],
      extends: [require.resolve('./')],
      rules: { ...ruleOverrides },
    },
    {
      files: ['addon-test-support/**/*.ts', 'tests/**/*.ts'],
      excludedFiles: ['tests/dummy/config/**/*.js'],
      extends: [require.resolve('./test')],
      rules: { ...ruleOverrides },
    },
    {
      files: ['tests/**/*.ts'],
      excludedFiles: ['tests/dummy/config/**/*.js'],
      rules: {
        // Allow `this` access in `test('...', function (assert) { })` without
        // an explicit `this` type definition in the function signature.
        '@typescript-eslint/no-invalid-this': 'off',

        // Allows re-using `hooks` in nested `module(...)` calls.
        '@typescript-eslint/no-shadow': 'off',

        // Annoying
        '@typescript-eslint/naming-convention': 'off',

        ...ruleOverrides,
      },
    },
    {
      files: ['addon-test-support/**/*.ts'],
      rules: {
        // Annoying
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
      },
    },
    {
      files: ['types/**/*.ts'],
      extends: [require.resolve('./')],
      rules: {
        // Annoying
        '@typescript-eslint/ban-types': 'off',

        ...ruleOverrides,
      },
    },
  ],
};
