'use strict';

module.exports = {
  extends: [
    'xo-space/esnext',
    require.resolve('./lib/common'),
    require.resolve('eslint-config-airbnb-base/rules/es6')
  ],
  env: {
    node: false
  }
};
