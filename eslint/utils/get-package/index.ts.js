// eslint-disable-next-line node/no-deprecated-api
if (!require.extensions['.ts']) {
  // eslint-disable-next-line node/no-unpublished-require, @typescript-eslint/no-var-requires
  require('ts-node').register({ transpileOnly: true });
}

module.exports = require('./index.ts');
module.exports.default = module.exports;
