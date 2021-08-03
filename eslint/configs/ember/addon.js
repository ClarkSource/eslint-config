'use strict';

const ruleOverrides = {};

module.exports = {
  extends: [
    require.resolve('@clark/eslint-config'),
    require.resolve('./ignore-patterns'),
  ],
  overrides: [
    {
      files: ['app/**/*.js', 'addon/**/*.js'],
      extends: [require.resolve('./')],
      rules: { ...ruleOverrides },
    },
    {
      files: ['addon-test-support/**/*.js', 'tests/**/*.js'],
      excludedFiles: ['tests/dummy/config/**/*.js'],
      extends: [require.resolve('./test')],
      rules: { ...ruleOverrides },
    },
    {
      files: ['addon-test-support/**/*.js'],
      rules: {
        // False positives for `@example` code blocks using `test(...)` in
        // DocBlock comments.
        'qunit/no-commented-tests': 'off',

        // Having private files in here is alright.
        'unicorn/filename-case': 'off',
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
      extends: [require.resolve('@clark/eslint-config-node')],
    },
  ],
};
