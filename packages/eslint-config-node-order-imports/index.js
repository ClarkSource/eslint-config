'use strict';

module.exports = {
  plugins: ['import-helpers'],
  rules: {
    /**
     * This orders the the ES6 module imports.
     */
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          [
            '/^(assert|async_hooks|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|http2|https|inspector|module|net|os|path|perf_hooks|process|punycode|querystring|readline|repl|stream|string_decoder|timers|tls|trace_events|tty|url|util|v8|vm|zli)(\\/.+)?$/'
          ],
          ['module'],
          ['absolute'],
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }
};
