module.exports = {
  extends: [require.resolve('./')],
  rules: {
    ...require.resolve('@clark/eslint-config-ember/test').rules,
    '@typescript-eslint/no-empty-function': 'off'
  }
};
