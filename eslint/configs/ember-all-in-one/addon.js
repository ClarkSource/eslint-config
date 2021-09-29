'use strict';

const overrides = require('./-private/overrides');

const ruleOverrides = {
  ...overrides.trailingComma,
  ...overrides.tsAnnoyances,
};

module.exports = {
  root: true,
  extends: ['@clark', require.resolve('./-private/configs/ignore-patterns')],
  overrides: [
    {
      files: '*.ts',
      extends: [require.resolve('@clark/eslint-config-typescript')],
      rules: { ...ruleOverrides },
    },
    {
      files: ['app/**/*.js'],
      extends: [require.resolve('@clark/eslint-config-ember')],
      rules: { ...ruleOverrides },
    },
    {
      files: ['addon/**/*.{js,ts}', 'types/**/*.{js,ts}'],
      extends: [require.resolve('@clark/eslint-config-ember-typescript')],
      rules: { ...ruleOverrides },
    },
    {
      files: ['addon-test-support/**/*.{js,ts}', 'tests/**/*.{js,ts}'],
      excludedFiles: ['tests/dummy/config/**/*.js'],
      extends: [require.resolve('@clark/eslint-config-ember-typescript/test')],
      rules: { ...ruleOverrides },
    },
    {
      files: ['tests/**/*.{js,ts}'],
      excludedFiles: ['tests/dummy/config/**/*.js'],
      extends: [require.resolve('@clark/eslint-config-ember-typescript/test')],
      rules: {
        // Allow `this` access in `test('...', function (assert) { })` without
        // an explicit `this` type definition in the function signature.
        '@typescript-eslint/no-invalid-this': 'off',

        // Allows re-using `hooks` in nested `module(...)` calls.
        '@typescript-eslint/no-shadow': 'off',

        // Annoying
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',

        ...ruleOverrides,
      },
    },
    {
      files: ['addon-test-support/**/*.{js,ts}'],
      rules: {
        // False positives for `@example` code blocks using `test(...)` in
        // DocBlock comments.
        'qunit/no-commented-tests': 'off',

        // Annoying
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',

        // Having private files in here is alright.
        'unicorn/filename-case': 'off',
      },
    },
    {
      files: ['types/**/*.{js,ts}'],
      extends: [require.resolve('@clark/eslint-config-typescript')],
      rules: {
        // Annoying
        '@typescript-eslint/ban-types': 'off',

        ...ruleOverrides,
      },
    },
    {
      files: ['public/**/*.js', 'vendor/**/*.js'],
      extends: [require.resolve('@clark/eslint-config-browser')],
      rules: { ...ruleOverrides },
    },
    {
      files: [
        './*.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js',
      ],
      extends: [require.resolve('./-private/configs/node')],
    },
  ],
};
