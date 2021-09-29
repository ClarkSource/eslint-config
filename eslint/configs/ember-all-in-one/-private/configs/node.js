'use strict';

const overrides = require('../overrides');

module.exports = {
  extends: '@clark/node',
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    ...overrides.trailingComma,
  },
};
