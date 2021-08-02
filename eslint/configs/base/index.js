'use strict';

module.exports = {
  extends: [
    'xo-space/esnext',
    require.resolve('./lib/common'),
    require.resolve('eslint-config-airbnb-base/rules/es6'),
    require.resolve('./lib/last'),
    require.resolve('./lib/parser-config')
  ],
  env: {
    node: false
  },
  rules: {
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],

    /**
     * @see https://github.com/prettier/prettier/issues/7590
     */
    'generator-star-spacing': 'off',

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

    'class-methods-use-this': 'off',

    /**
     * Disallow implicit type coercion, like:
     *
     * ```js
     * const b = !!foo;
     * const b = ~foo.indexOf(".");
     * const n = +foo;
     * const n = 1 * foo;
     * let s = "" + foo;
     * foo += ``;
     * ```
     *
     * @see https://eslint.org/docs/rules/no-implicit-coercion
     */
    'no-implicit-coercion': 'error'
  },
  overrides: require('./lib/overrides').overrides
};
