'use strict';

module.exports = {
  arrowParens: 'avoid',
  singleQuote: true,
  trailingComma: 'none', // @TODO: switch to 'all'

  overrides: [
    {
      files: ['*.hbs', '*.html'],
      options: {
        singleQuote: false
      }
    }
  ]
};
