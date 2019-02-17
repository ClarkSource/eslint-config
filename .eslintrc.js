const { join } = require('path');

module.exports = {
  extends: join(__dirname, 'packages', 'eslint-config-node', 'index.js')
};
