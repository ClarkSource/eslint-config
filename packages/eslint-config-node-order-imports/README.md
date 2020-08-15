<p align="center">
  <a href="https://github.com/ClarkSource/eslint-config#readme">
    <br><br><br><br><br>
    <img alt="CLARK" src="https://raw.githubusercontent.com/ClarkSource/eslint-config/HEAD/docs/assets/clark.svg" height="40">
    <br><br><br><br><br>
  </a>
</p>

# `@clark/eslint-config-node-order-imports`

![Node CI](https://github.com/ClarkSource/eslint-config/workflows/Node%20CI/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![dependencies](https://david-dm.org/ClarkSource/eslint-config/status.svg?path=packages/eslint-config-node-order-imports)](https://david-dm.org/ClarkSource/eslint-config?path=packages/eslint-config-node-order-imports)
[![devDependencies](https://david-dm.org/ClarkSource/eslint-config/dev-status.svg?path=packages/eslint-config-node-order-imports)](https://david-dm.org/ClarkSource/eslint-config?path=packages/eslint-config-node-order-imports&type=dev)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![CLARK Open Source](https://img.shields.io/badge/CLARK-Open%20Source-%232B6CDE.svg)](https://www.clark.de/de/jobs)

> Sorts ES module imports for Node.js projects

## Installation

If you use the [`@clark/eslint-config-node`][eslint-config-node] or
[`@clark/eslint-config-node-typescript`][eslint-config-node-typescript], you
don't need to do anything, as they already include this config.

[eslint-config-node]: https://github.com/ClarkSource/eslint-config/tree/main/packages/eslint-config-node
[eslint-config-node-typescript]: https://github.com/ClarkSource/eslint-config/tree/main/packages/eslint-config-node-typescript

If you don't like our config and just want to order your imports while using
your own eslint config, just install this package and add it to `extends`.

```bash
yarn add -D eslint @clark/eslint-config-node-order-imports
```

```js
module.exports = {
  extends: ["@clark/node-order-imports"],
  rules: {
    // your rules here
  },
};
```

## What does it do?

This is a distributable standalone config for
[`eslint-plugin-import-helpers`][eslint-plugin-import-helpers] that orders the
ES module imports. The order is a s follows:

1. Node standard modules: `fs`, `http`, ...
2. Named modules, e.g. installed from npm: `lodash`, `dotenv/register`
3. Absolute paths (very uncommon): `/foo/bar`
4. Parent modules: `../foo`
5. Sibling modules: `./bar`
6. Index: `./`

[eslint-plugin-import-helpers]: https://github.com/Tibfib/eslint-plugin-import-helpers
