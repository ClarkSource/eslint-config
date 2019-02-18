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

    /**
     * ```js
     * function* generator() {}
     *
     * function*() {}
     * ```
     */
    'generator-star-spacing': [
      'error',
      { before: false, after: true, anonymous: 'neither' }
    ],

    /**
     * This enforces destructuring assignments, except for object destructuring
     * assignment expressions, which would need to be wrapped in `()`.
     */
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: true,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    'class-methods-use-this': 'off'
  }
};
