'use strict';

module.exports = {
  extends: [
    'xo-space',
    require.resolve('./lib/common'),
    require.resolve('./lib/last')
  ],
  env: {
    es6: false
  }
};
