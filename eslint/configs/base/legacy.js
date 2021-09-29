'use strict';

module.exports = {
  extends: [
    require.resolve('eslint-config-xo'),
    require.resolve('./lib/common'),
    require.resolve('./lib/parser-config.legacy'),
    require.resolve('./lib/last.legacy'),
  ],
  env: {
    es6: false,
  },
  overrides: require('./lib/overrides').overrides,
};
