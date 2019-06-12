'use strict';

const APP_NAME = require(`${process.cwd()}/package.json`).name;

module.exports = {
  plugins: ['import-helpers'],
  rules: {
    /**
     * This orders the the ES6 module imports.
     *
     * Based on the config from `skylines` by Tobias Bieniek.
     *
     * @see https://github.com/skylines-project/skylines/blob/861a4b0d7025599c5546166253f342d1890590d4/ember/.eslintrc.js#L17-L33
     */
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          // Testing modules
          [
            '/^qunit/',
            '/^ember-qunit/',
            '/^@ember/test-helpers/',
            '/^ember-exam/'
          ],
          // Ember.js modules
          ['/^ember$/', '/^@ember/', '/^ember-data/'],
          ['/^ember-/'],
          ['module'],
          ['absolute'],
          [`/^${APP_NAME}\\//`, `/^dummy\\//`],
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }
};
