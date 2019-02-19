'use strict';

const {
  DEFAULT_IGNORED_PROPERTIES
} = require('eslint-plugin-ember/lib/rules/avoid-leaking-state-in-ember-objects');

module.exports = {
  plugins: ['ember', 'ember-best-practices'],
  extends: [
    '@clark/browser',
    'plugin:ember/recommended',
    'plugin:ember-best-practices/recommended'
  ],
  rules: {
    /**
     * Disabled, because it reports false positives for `@computed('foo')`.
     *
     * @see https://github.com/ember-best-practices/eslint-plugin-ember-best-practices/issues/103
     */
    'ember-best-practices/require-dependent-keys': 'off',

    /**
     * Avoids leaking state in `.extend({ ... })` blocks. Adds exemptions for
     * `ember-css-modules`.
     *
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/avoid-leaking-state-in-ember-objects.md
     */
    'ember/avoid-leaking-state-in-ember-objects': [
      'error',
      [
        ...DEFAULT_IGNORED_PROPERTIES,
        'localClassNames',
        'localClassNameBindings'
      ]
    ]
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
