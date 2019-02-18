'use strict';

module.exports = {
  plugins: ['ember', 'ember-best-practices'],
  extends: [
    '@clarkapp/browser',
    'plugin:ember/recommended',
    'plugin:ember-best-practices/recommended'
  ],
  rules: {
    /**
     * Disabled, because it reports false positives for `@computed('foo')`.
     *
     * @see https://github.com/ember-best-practices/eslint-plugin-ember-best-practices/issues/103
     */
    'ember-best-practices/require-dependent-keys': 'off'
  },
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
