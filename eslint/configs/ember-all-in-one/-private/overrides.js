'use strict';

module.exports = {
  /**
   * Enforce trailing commas.
   *
   * @todo Should be default in upstream base config and eventually use:
   * {@link https://github.com/prettier/eslint-plugin-prettier/pull/417}
   */
  trailingComma: {
    'prettier/prettier': ['error', require('@clark/prettier-config')],
  },

  /**
   * Disables some overzealous rules that clash with default patterns in
   * Ember.js core code and can be reasonably safely ignored, if you know what
   * you are doing.
   */
  tsAnnoyances: {
    '@typescript-eslint/ban-types': 'off',
  },
};
