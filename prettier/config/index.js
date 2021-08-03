'use strict';

module.exports = {
  singleQuote: true,
  trailingComma: 'all',

  overrides: [
    {
      files: ['*.hbs', '*.html'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
