'use strict';

module.exports = {
  extends: [require.resolve('./last')],
  rules: {
    'prettier/prettier': ['error', require('@clark/prettier-config/legacy')],
  },
};
