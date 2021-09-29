'use strict';

const overrides = require('./-private/overrides');

const ruleOverrides = {
  ...overrides.trailingComma,
};

// @TODO
module.exports = {
  root: true,
  extends: [
    require.resolve('@clark/eslint-config'),
    require.resolve('./-private/configs/ignore-patterns'),
  ],
  rules: {
    ...ruleOverrides,
  },
};
