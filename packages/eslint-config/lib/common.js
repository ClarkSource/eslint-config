'use strict';

module.exports = {
  plugins: ['unicorn', 'prettier'],
  extends: [
    'eslint:recommended',
    ...['best-practices', 'errors', 'style', 'variables'].map(r =>
      require.resolve(`eslint-config-airbnb-base/rules/${r}`)
    ),
    'plugin:unicorn/recommended'
  ],
  rules: {
    /**
     * Since this config is not browser specific, we disable any
     * browser-specific rules. They are re-enabled in `eslint-config-browser`.
     */

    'unicorn/prefer-add-event-listener': 'off',
    'unicorn/prefer-node-append': 'off',
    'unicorn/prefer-query-selector': 'off',
    // 'unicorn/prefer-node-remove': 'off',
    'unicorn/prefer-text-content': 'off',

    /**
     * Since this config is not Node specific, we disable any
     * Node-specific rules. They are re-enabled in `eslint-config-node`.
     */

    'unicorn/no-process-exit': 'off',
    'unicorn/no-new-buffer': 'off',

    /**
     * This allows short-circuit idioms, like:
     *
     * ```js
     * this.super && this.super(...arguments);
     *
     * this.someAction ? this.someAction() : this.fallback();
     * ```
     */
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true }
    ],

    'valid-jsdoc': 'off',

    /**
     * This permits leading underscores in identifiers.
     */
    'no-underscore-dangle': 'off',

    /**
     * This permits the usage of the unary operators, as in ``i++` and `i--`.
     */
    'no-plusplus': 'off',

    'no-empty-function': 'warn',

    'consistent-return': 'off'
  }
};
