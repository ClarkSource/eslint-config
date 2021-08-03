'use strict';

module.exports = {
  overrides: [
    {
      files: ['*.js'],
      extends: ['@clark/eslint-config-node'],
    },
    {
      files: ['*.ts'],
      extends: ['@clark/eslint-config-node-typescript'],
    },
  ],
};
