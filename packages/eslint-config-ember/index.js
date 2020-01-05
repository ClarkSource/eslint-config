'use strict';

const [
  BASE_ABBREVIATIONS_LEVEL,
  BASE_ABBREVIATIONS_CONFIG
] = require('@clark/eslint-config/lib/common').rules[
  'unicorn/prevent-abbreviations'
];
const {
  DEFAULT_IGNORED_PROPERTIES
} = require('eslint-plugin-ember/lib/rules/avoid-leaking-state-in-ember-objects');
const merge = require('lodash.merge');

module.exports = {
  plugins: ['ember', 'ember-best-practices'],
  extends: [
    '@clark/browser',
    '@clark/ember-order-imports',
    'plugin:ember/recommended',
    'plugin:ember-best-practices/recommended',
    require.resolve('@clark/eslint-config/lib/parser-config')
  ],
  rules: {
    /**
     * By default assigning a property to itself is forbidden. Since this is
     * required when updating not deeply tracked non-primitives in Ember, we
     * allow it here.
     *
     * ```ts
     * class Foo {
     *   @tracked array = [];
     *
     *   pushRandomNumber() {
     *     this.array.push(Math.random());
     *     this.array = this.array;
     *   }
     * }
     * ```
     *
     * @see https://eslint.org/docs/rules/no-self-assign
     * @see https://stackoverflow.com/questions/57468327/why-wont-my-tracked-array-update-in-ember-octane
     * @see https://github.com/pzuraq/tracked-built-ins
     */
    'no-self-assign': ['error', { props: false }],

    /**
     * Ember does not allow deeply-nested computed property dependent keys with
     * `@each`, like `todos.@each.owner.name`.
     *
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-deeply-nested-dependent-keys-with-each.md
     */
    'ember/no-deeply-nested-dependent-keys-with-each': 'error',

    /**
     * Makes sure that you use the correct order for Ember's debug functions:
     *
     * - `assert(description: string, condition: boolean)`
     * - `warn(description: string, condition: boolean)`
     * - `deprecate(description: string, condition: boolean)`
     *
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-invalid-debug-function-arguments.md
     */
    'ember/no-invalid-debug-function-arguments': 'error',

    /**
     * While `this._super()` is the only way to invoke an overridden method in
     * an `EmberObject.extend`-style class, the `_super` method doesn't work
     * properly when using native class syntax.
     *
     * @see https://github.com/ember-cli/eslint-plugin-ember/tree/master/docs/rules/no-ember-super-in-es-classes.md
     */
    'ember/no-ember-super-in-es-classes': 'error',

    /**
     * When defining a route, it's not necessary to specify the `path` option,
     * if it matches the route name.
     *
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-unnecessary-route-path-option.md
     */
    'ember/no-unnecessary-route-path-option': 'error',

    /**
     * Do not import from a test file (a file ending in `-test.js`) in another
     * test file. Doing so will cause the module and tests from the imported
     * file to be executed again.
     * Similarly, test files should not have any exports.
     *
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-test-import-export.md
     */
    'ember/no-test-import-export': 'error',

    /**
     * Use `await` instead of `andThen` test wait helper
     *
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-test-and-then.md
     */
    'ember/no-test-and-then': 'error',

    /**
     * Prohibits the usage of jQuery. This is a hard error, since modern Ember
     * apps don't ship with jQuery by default. If you're dealing with legacy
     * code, we recommend setting this to `warn`.
     *
     * @see https://github.com/ember-cli/eslint-plugin-ember/tree/master/docs/rules/no-jquery.md
     */
    'ember/no-jquery': 'error',

    /**
     * Prohibits creating mixins, as they are a bad practice, don't play well
     * with native ES classes and will probably be deprecated at some point.
     *
     * Use decorators or a composable pattern instead.
     */
    'ember/no-new-mixins': 'error',

    /**
     * Since Ember 3.4+ this rule is not required any more, as the run loop is
     * not starts automatically.
     *
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/jquery-ember-run.md
     */
    'ember/jquery-ember-run': 'off',

    /**
     * Don't enforce it, but nudge devs to use ember-lifeline or something
     * similar to avoid "set after destroy" errors, when using `@ember/run`.
     *
     * @see https://github.com/ember-best-practices/eslint-plugin-ember-best-practices/blob/master/guides/rules/require-ember-lifeline.md
     */
    'ember-best-practices/require-ember-lifeline': 'warn',

    /**
     * Disabled, because it reports false positives for `@computed('foo')` and
     * would also disallow the lazily computed cache pattern.
     *
     * @see https://github.com/ember-best-practices/eslint-plugin-ember-best-practices/blob/master/guides/rules/require-dependent-keys.md
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
     * Disables `ember-best-practices/no-attrs` in favor of just
     * `ember/no-attrs-in-components`, which is the same, but slightly more
     * sophisticated.
     *
     * @see https://github.com/ember-best-practices/eslint-plugin-ember-best-practices/blob/master/lib/rules/no-attrs.js
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/lib/rules/no-attrs-in-components.js
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-attrs-in-components.md
     */
    'ember-best-practices/no-attrs': 'off',
    'ember/no-attrs-in-components': 'error',

    /**
     * Disables `ember-best-practices/no-broken-super-chain` in favor of just
     * `ember/require-super-in-init`, which is the same, but slightly more
     * sophisticated.
     *
     * @see https://github.com/ember-best-practices/eslint-plugin-ember-best-practices/blob/master/lib/rules/no-broken-super-chain.js
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/lib/rules/require-super-in-init.js
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/require-super-in-init.md
     */
    'ember-best-practices/no-broken-super-chain': 'off',
    'ember/require-super-in-init': 'error',

    /**
     * Disables `ember-best-practices/no-global-jquery` in favor of just
     * `ember/no-global-jquery`, which is the same, but slightly more
     * sophisticated.
     *
     * @see https://github.com/ember-best-practices/eslint-plugin-ember-best-practices/blob/master/lib/rules/no-global-jquery.js
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/lib/rules/no-global-jquery.js
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/no-global-jquery.md
     */
    'ember-best-practices/no-global-jquery': 'off',
    'ember/no-global-jquery': 'error',

    /**
     * Disables `ember-best-practices/no-send-action` in favor of just
     * `ember/closure-actions`, which is the same, but slightly more
     * sophisticated.
     *
     * @see https://github.com/ember-best-practices/eslint-plugin-ember-best-practices/blob/master/lib/rules/no-send-action.js
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/lib/rules/closure-actions.js
     * @see https://github.com/ember-cli/eslint-plugin-ember/blob/master/docs/rules/closure-actions.md
     */
    'ember-best-practices/no-send-action': 'off',
    'ember/closure-actions': 'error',

    'unicorn/prevent-abbreviations': [
      BASE_ABBREVIATIONS_LEVEL,
      merge(BASE_ABBREVIATIONS_CONFIG, {
        whitelist: require('./allowed-abbreviations').reduce(
          (object, keyword) => ({ ...object, [keyword]: true }),
          {}
        )
      })
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
