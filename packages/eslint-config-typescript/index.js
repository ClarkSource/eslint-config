'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@clark',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': 'off', // Prettier already takes care of this.
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter'
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        caughtErrors: 'all' // https://mariusschulz.com/blog/optional-catch-binding-in-typescript
      }
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    // '@typescript-eslint/prefer-regexp-exec': 'error',
    // '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'error',
    // '@typescript-eslint/prefer-nullish-coalescing': 'error',
    // '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-as-const': 'error',

    'dot-notation': 'warn',
    '@typescript-eslint/dot-notation': 'off',

    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'warn',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members':
      require('@clark/eslint-config/lib/common').rules[
        'lines-between-class-members'
      ],

    /**
     * This allows short-circuit idioms, like:
     *
     * ```js
     * this.super && this.super(...arguments);
     *
     * this.someAction ? this.someAction() : this.fallback();
     * ```
     *
     * It disabled the eslint version and instead enables the TS version, to
     * properly support optional chaining.
     */
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions':
      require('@clark/eslint-config/lib/common').rules['no-unused-expressions'],

    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    /**
     * @note Requires parser services and is thus disabled.
     *
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
     */
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'off',

    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',

    /**
     * Disallow throwing strings.
     *
     * @note Requires parser services and is thus disabled.
     *
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
     */
    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'off',

    /**
     * Asynchronous functions that don’t use await might not need to be
     * asynchronous functions and could be the unintentional result of
     * refactoring.
     *
     * @note Requires parser services and is thus disabled.
     *
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
     */
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',

    /**
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md#enforce-the-codebase-follows-eslints-camelcase-conventions
     */
    camelcase: 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase']
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE']
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
        leadingUnderscore: 'forbid'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false
        }
      }
    ],

    '@typescript-eslint/array-type': 'error',

    /**
     * Adds support for numeric separators to the base rule.
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
     */
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error'
  },
  overrides: [
    {
      /**
       * `.d.ts` files contain no logic and have different requirements. So some
       * rules are not applicable here.
       */
      files: '*.d.ts',
      rules: {
        'no-shadow': 'off',

        '@typescript-eslint/init-declarations': 'off',

        /**
         * To support scoped packages in `types`, e.g.
         * `types/ember__object.d.ts` which maps to `@ember/object`.
         */
        'unicorn/filename-case': 'off',

        /**
         * We don't want to auto-fix names in typings as the source modules they
         * type are not changed.
         */
        'unicorn/prevent-abbreviations': 'off',
        '@typescript-eslint/naming-convention': 'off'
      }
    },
    {
      /**
       * Disabling this rule for `.ts` files because, it throws an error for
       * exporting interfaces, and we can safely disable it since TypeScript
       * will fail to compile with undefined vars, more info:
       * https://github.com/typescript-eslint/typescript-eslint/issues/342
       * https://github.com/eslint/typescript-eslint-parser/issues/437#issuecomment-435526531
       */
      files: '*.ts',
      rules: {
        'no-undef': 'off'
      }
    }
  ]
};
