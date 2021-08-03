// eslint-disable-next-line node/no-deprecated-api
if (!require.extensions['.ts']) {
  // eslint-disable-next-line node/no-unpublished-require
  require('ts-node').register({ transpileOnly: true });
}

// eslint-disable-next-line node/no-unpublished-require
module.exports = require('./index.ts');
