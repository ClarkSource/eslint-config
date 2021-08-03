'use strict';

module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    /**
     * This enables the default prettier formatting, but with single quotes and
     * trailing commas everywhere.
     *
     * @todo Make the explicit option a fallback only.
     * {@link https://github.com/prettier/eslint-plugin-prettier/pull/417}
     */
    'prettier/prettier': ['error', require('@clark/prettier-config')],
  },
};
