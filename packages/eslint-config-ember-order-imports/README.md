# `@clark/eslint-config-ember-order-imports`

![Node CI](https://github.com/ClarkSource/eslint-config/workflows/Node%20CI/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![dependencies](https://david-dm.org/ClarkSource/eslint-config/status.svg?path=packages/eslint-config-ember-order-imports)](https://david-dm.org/ClarkSource/eslint-config?path=packages/eslint-config-ember-order-imports)
[![devDependencies](https://david-dm.org/ClarkSource/eslint-config/dev-status.svg?path=packages/eslint-config-ember-order-imports)](https://david-dm.org/ClarkSource/eslint-config?path=packages/eslint-config-ember-order-imports&type=dev)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![CLARK Open Source](https://img.shields.io/badge/CLARK-Open%20Source-%232B6CDE.svg)](https://www.clark.de/de/jobs)

> Sorts ES module imports for Ember.js projects

## Installation

If you use the [`@clark/eslint-config-ember`][eslint-config-ember] or
[`@clark/eslint-config-ember-typescript`][eslint-config-ember-typescript], you
don't need to do anything, as they already include this config.

[eslint-config-ember]: https://github.com/ClarkSource/eslint-config/tree/main/packages/eslint-config-ember
[eslint-config-ember-typescript]: https://github.com/ClarkSource/eslint-config/tree/main/packages/eslint-config-ember-typescript

If you don't like our config and just want to order your imports while using
your own eslint config, just install this package and add it to `extends`.

```bash
yarn add -D eslint @clark/eslint-config-ember-order-imports
```

```js
module.exports = {
  extends: ["@clark/ember-order-imports"],
  rules: {
    // your rules here
  },
};
```

## What does it do?

This is a distributable standalone config for
[`eslint-plugin-import-helpers`][eslint-plugin-import-helpers] that orders the
ES module imports.

The config is extracted from / based on the config in [`skylines`][skylines].

[eslint-plugin-import-helpers]: https://github.com/Tibfib/eslint-plugin-import-helpers
[skylines]: https://github.com/skylines-project/skylines/blob/861a4b0d7025599c5546166253f342d1890590d4/ember/.eslintrc.js#L17-L33
