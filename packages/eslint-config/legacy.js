'use strict';

module.exports = {
  extends: [
    'xo-space',
    require.resolve('./lib/common'),
    require.resolve('./lib/last'),
    require.resolve('./lib/overrides')
  ],
  // eslint-disable-next-line unicorn/prevent-abbreviations
  env: {
    es6: false
  }
};
