module.exports = {
  extends: [require.resolve('./'), require('@clark/eslint-config-ember/test')],
  rules: {
    '@typescript-eslint/no-empty-function': 'off'
  }
};
