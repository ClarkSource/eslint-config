'use strict';

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      impliedStrict: true,
    },
    sourceType: 'module',
    requireConfigFile: false,
  },
};
