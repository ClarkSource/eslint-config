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
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-triple-slash-reference': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error'
  },
  overrides: [
    {
      /**
       * `.d.ts` files contain no logic and have different requirements. So some
       * rules are not applicable here.
       */
      files: '*.d.ts',
      rules: {
        'no-shadow': 'off'
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
