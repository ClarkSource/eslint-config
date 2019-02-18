'use strict';

module.exports = {
  extends: [
    'xo-space/esnext',
    require.resolve('./lib/common'),
    require.resolve('eslint-config-airbnb-base/rules/es6'),
    require.resolve('./lib/last')
  ],
  env: {
    node: false
  },
  rules: {
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],

    'generator-star-spacing': [
      'error',
      { before: true, after: false, anonymous: 'neither' }
    ],

    'class-methods-use-this': 'off'
  }
};
