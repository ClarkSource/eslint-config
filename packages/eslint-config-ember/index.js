'use strict';

const {
  DEFAULT_IGNORED_PROPERTIES
} = require('eslint-plugin-ember/lib/rules/avoid-leaking-state-in-ember-objects');

module.exports = {
  plugins: ['ember', 'ember-best-practices'],
  extends: [
    '@clark/browser',
    'plugin:ember/recommended',
    'plugin:ember-best-practices/recommended',
    require.resolve('@clark/eslint-config/lib/parser-config')
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
    ],

    /**
     * Disables `ember-best-practices/no-observers` in favor of just
     * `ember/no-observers`, which is the same, but slightly more sophisticated.
     *
     * @see https://github.com/ember-best-practices/eslint-plugin-ember-best-practices/blob/master/lib/rules/no-observers.js
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/lib/rules/no-observers.js
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-observers.md
     */
    'ember-best-practices/no-observers': 'off',
    'ember/no-observers': 'error',

    /**
     * Disables `ember-best-practices/no-attrs-snapshot` in favor of just
     * `ember/no-attrs-snapshot`, which is the same, but slightly more
     * sophisticated.
     *
     * @see https://github.com/ember-best-practices/eslint-plugin-ember-best-practices/blob/master/lib/rules/no-attrs-snapshot.js
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/lib/rules/no-attrs-snapshot.js
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-attrs-snapshot.md
     */
    'ember-best-practices/no-attrs-snapshot': 'off',
    'ember/no-attrs-snapshot': 'error',

    /**
     * Since Ember 3.4+ this rule is not required any more, as the run loop is
     * not starts automatically.
     *
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/jquery-ember-run.md
     */
    'ember/jquery-ember-run': 'off'
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
