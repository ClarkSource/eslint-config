'use strict';

module.exports = {
  extends: [require.resolve('./'), require.resolve('./qunit')],
  rules: {
    'max-classes-per-file': 'off',
  },
};
