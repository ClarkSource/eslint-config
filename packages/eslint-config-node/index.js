'use strict';

const [
  BASE_ABBREVIATIONS_LEVEL,
  BASE_ABBREVIATIONS_CONFIG
] = require('@clark/eslint-config/lib/common').rules[
  'unicorn/prevent-abbreviations'
];
const merge = require('lodash.merge');

module.exports = {
  plugins: ['node'],
  extends: ['@clark', 'plugin:node/recommended', '@clark/node-order-imports'],
  env: {
    node: true,
    browser: false
  },
  overrides: [
    {
      files: ['environment.js'],
      rules: {
        'unicorn/prevent-abbreviations': [
          BASE_ABBREVIATIONS_LEVEL,
          merge(BASE_ABBREVIATIONS_CONFIG, {
            whitelist: {
              EmberENV: true
            }
          })
        ]
      }
    },
    {
      files: ['ember-try.js'],
      rules: {
        'unicorn/prevent-abbreviations': [
          BASE_ABBREVIATIONS_LEVEL,
          merge(BASE_ABBREVIATIONS_CONFIG, {
            whitelist: {
              devDependencies: true,
              env: true
            }
          })
        ]
      }
    }
  ]
};
