const {
  extends: extensions,
  rules,
} = require('@clark/eslint-config-ember/test');

module.exports = {
  extends: [require.resolve('./'), ...extensions.slice(1)],
  rules: {
    ...rules,
    '@typescript-eslint/no-empty-function': 'off',
  },
};
