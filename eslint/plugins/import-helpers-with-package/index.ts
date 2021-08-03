import { rules as originalRules } from 'eslint-plugin-import-helpers';

import orderImports, { DEFAULT_GROUPS } from './rules/order-imports';

const pluginName = '@clark/import-helpers-with-package';

// @TODO Replace with
// https://github.com/import-js/eslint-plugin-import
// https://github.com/alexgorbatchev/eslint-import-resolver-typescript
export const rules = {
  ...originalRules,
  'order-imports': orderImports,
};

export const configs = {
  recommended: {
    rules: {
      [`${pluginName}/order-imports`]: [
        'error',
        {
          newlinesBetween: 'always',
          alphabetize: { order: 'asc', ignoreCase: true },
          groups: DEFAULT_GROUPS,
        },
      ],
    },
  },
};
