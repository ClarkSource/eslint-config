'use strict';

module.exports = {
  extends: ['plugin:prettier/recommended', 'prettier/unicorn'],
  rules: {
    /**
     * This enables the default prettier formatting, but with single quotes.
     */
    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'none', arrowParens: 'avoid' }
    ]
  }
};
