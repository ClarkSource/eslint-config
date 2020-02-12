'use strict';

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@clark',
    'plugin:@typescript-eslint/eslint-recommended',
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
    '@typescript-eslint/no-unused-expressions': require('@clark/eslint-config/lib/common')
      .rules['no-unused-expressions']
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

        /**
         * To support scoped packages in `types`, e.g.
         * `types/ember__object.d.ts` which maps to `@ember/object`.
         */
        'unicorn/filename-case': 'off'
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
