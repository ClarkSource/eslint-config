'use strict';

module.exports = {
  plugins: ['unicorn', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier/unicorn'
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
     * This enables the default prettier formatting, but with single quotes.
     */
    'prettier/prettier': ['error', { singleQuote: true }],

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

    'valid-jsdoc': 'off'
  }
};
