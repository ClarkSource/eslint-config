'use strict';

module.exports = {
  overrides: [
    {
      files: ['**/.eslintrc.js'],
      // eslint-disable-next-line unicorn/prevent-abbreviations
      env: {
        node: true
      }
    }
  ]
};
