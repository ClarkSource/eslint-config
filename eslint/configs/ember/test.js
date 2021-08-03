module.exports = {
  plugins: ['qunit'],
  extends: [require.resolve('./'), require.resolve('./qunit')],
  rules: {
    'max-classes-per-file': 'off',
  },
};
