'use strict';

module.exports = {
  plugins: ['@clark/import-helpers-with-package'],
  rules: {
    /**
     * This orders the the ES6 module imports.
     *
     * Based on the config from `skylines` by Tobias Bieniek.
     *
     * @see https://github.com/skylines-project/skylines/blob/861a4b0d7025599c5546166253f342d1890590d4/ember/.eslintrc.js#L17-L33
     */
    '@clark/import-helpers-with-package/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          // Testing modules
          [
            '/^qunit/',
            '/^ember-qunit/',
            '/^@ember/test-helpers/',
            '/^ember-exam/',
          ],
          // Ember.js modules
          [
            '/^ember$/',
            '/^@ember/',
            '/^ember-data/',
            '/^@glimmer/',
            '/^require$/',
          ],
          ['/^ember-/'],
          ['module'],
          ['absolute'],
          ['package', `/^dummy\\//`],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
