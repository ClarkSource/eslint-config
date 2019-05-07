'use strict';

module.exports = {
  plugins: ['node'],
  extends: ['@clark', 'plugin:node/recommended'],
  // eslint-disable-next-line unicorn/prevent-abbreviations
  env: {
    node: true,
    browser: false
  }
};
