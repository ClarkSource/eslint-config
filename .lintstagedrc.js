'use strict';

module.exports = {
  // Lint and auto-format all `.js` and `.ts` files with `eslint`, which also
  // includes `prettier` via the `prettier-eslint-plugin`.
  // Note the `--quiet`, to prevent auto-fixing `warning`-level issues.
  '*.{js,ts}': 'eslint --quiet --fix',

  // Auto-format everything else with `prettier`. File types that aren't
  // understood by `prettier` or files that are exempted via `.prettierignore`
  // are left alone.
  '*.!(js,ts)': 'prettier --write',
};
