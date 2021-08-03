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
    plugins: ['@clark/import-helpers-with-package'],
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
  node: {
    plugins: ['@clark/import-helpers-with-package'],
    rules: {
      [`${pluginName}/order-imports`]: [
        'error',
        {
          newlinesBetween: 'always',
          alphabetize: { order: 'asc', ignoreCase: true },
          groups: [
            [
              '/^(assert|async_hooks|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|http2|https|inspector|module|net|os|path|perf_hooks|process|punycode|querystring|readline|repl|stream|string_decoder|timers|tls|trace_events|tty|url|util|v8|vm|zli)(\\/.+)?$/',
            ],
            ...DEFAULT_GROUPS,
          ] as const,
        },
      ],
    },
  },
};
