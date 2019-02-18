'use strict';

module.exports = {
  plugins: ['ember', 'ember-best-practices'],
  extends: [
    '@clarkapp/browser',
    'plugin:ember/recommended',
    'plugin:ember-best-practices/recommended'
  ],
  overrides: [
    {
      /**
       * This override avoids a false positive for `Router.map(...)`.
       */
      files: ['router.js', 'router.ts'],
      rules: {
        'array-callback-return': 'off'
      }
    }
  ]
};
