<p align="center">
  <a href="https://www.clark.de/de/jobs">
    <br><br><br><br><br>
    <img alt="CLARK" src="./docs/assets/clark.svg" height="40">
    <br><br><br><br><br>
  </a>
</p>

# CLARK's eslint-config

[![Build Status](https://travis-ci.org/ClarkSource/eslint-config.svg)](https://travis-ci.org/ClarkSource/eslint-config)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![dependencies](https://img.shields.io/david/ClarkSource/eslint-config.svg)](https://david-dm.org/ClarkSource/eslint-config)
[![devDependencies](https://img.shields.io/david/dev/ClarkSource/eslint-config.svg)](https://david-dm.org/ClarkSource/eslint-config)
[![CLARK Open Source](https://img.shields.io/badge/CLARK-Open%20Source-%232B6CDE.svg)](https://www.clark.de/de/jobs)

This repo contains all of [CLARK](https://github.com/ClarkSource)'s
[eslint](https://eslint.org/) configuration presets.

- <sub>[![npm](https://img.shields.io/npm/v/@clark/eslint-config?label)](https://www.npmjs.com/package/@clark/eslint-config)</sub>
  [**`@clark/eslint-config`**](/packages/eslint-config)\
  The base config that all other configs extend from.
- <sub>[![npm](https://img.shields.io/npm/v/@clark/eslint-config-typescript?label)](https://www.npmjs.com/package/@clark/eslint-config-typescript)</sub>
  [**`@clark/eslint-config-typescript`**](/packages/eslint-config-typescript)\
  Adds support for parsing TypeScript, as well as TypeScript-specific rules.
- <sub>[![npm](https://img.shields.io/npm/v/@clark/eslint-config-node?label)](https://www.npmjs.com/package/@clark/eslint-config-node)</sub>
  [**`@clark/eslint-config-node`**](/packages/eslint-config-node)\
  Adds Node.js-specific rules and sets the environment.
- <sub>[![npm](https://img.shields.io/npm/v/@clark/eslint-config-node-typescript?label)](https://www.npmjs.com/package/@clark/eslint-config-node-typescript)</sub>
  [**`@clark/eslint-config-node-typescript`**](/packages/eslint-config-node-typescript)\
  Combines `eslint-config-node` and `eslint-config-typescript`.
- <sub>[![npm](https://img.shields.io/npm/v/@clark/eslint-config-node-order-imports?label)](https://www.npmjs.com/package/@clark/eslint-config-node-order-imports)</sub>
  [**`@clark/eslint-config-node-order-imports`**](/packages/eslint-config-node-order-imports)\
  Sorts ES module imports for Node.js projects.
- <sub>[![npm](https://img.shields.io/npm/v/@clark/eslint-config-browser?label)](https://www.npmjs.com/package/@clark/eslint-config-browser)</sub>
  [**`@clark/eslint-config-browser`**](/packages/eslint-config-browser)\
  Extends from the base config and sets the browser environment.
- <sub>[![npm](https://img.shields.io/npm/v/@clark/eslint-config-ember?label)](https://www.npmjs.com/package/@clark/eslint-config-ember)</sub>
  [**`@clark/eslint-config-ember`**](/packages/eslint-config-ember)\
  Extends from `eslint-config-browser` and adds Ember.js-specific rules to it.
- <sub>[![npm](https://img.shields.io/npm/v/@clark/eslint-config-ember-typescript?label)](https://www.npmjs.com/package/@clark/eslint-config-ember-typescript)</sub>
  [**`@clark/eslint-config-ember-typescript`**](/packages/eslint-config-ember-typescript)\
  Combines `eslint-config-ember` and `eslint-config-typescript`.
- <sub>[![npm](https://img.shields.io/npm/v/@clark/eslint-config-ember-order-imports?label)](https://www.npmjs.com/package/@clark/eslint-config-ember-order-imports)</sub>
  [**`@clark/eslint-config-ember-order-imports`**](/packages/eslint-config-ember-order-imports)\
  Sorts ES module imports for Ember.js projects.

There are also a few more configs, plugins and utils in this repository:

- <sub>[![npm](https://img.shields.io/npm/v/@clark/prettier-config?label)](https://www.npmjs.com/package/@clark/prettier-config)</sub>
  [**`@clark/prettier-config`**](/packages/prettier-config)\
  Our config for [Prettier][prettier]. Used by `eslint-config`.
- <sub>[![npm](https://img.shields.io/npm/v/@clark/eslint-plugin-import-helpers-with-package?label)](https://www.npmjs.com/package/@clark/eslint-plugin-import-helpers-with-package)</sub>
  [**`@clark/eslint-plugin-import-helpers-with-package`**](/packages/eslint-plugin-import-helpers-with-package)\
  Extends [`eslint-plugin-import-helpers/order-imports`][order-imports] so that
  it can infer the name of the package the file belongs to.
- <sub>[![npm](https://img.shields.io/npm/v/@clark/eslint-util-get-package?label)](https://www.npmjs.com/package/@clark/eslint-util-get-package)</sub>
  [**`@clark/eslint-util-get-package`**](/packages/eslint-util-get-package)\
  Finds the `package.json` a source file belongs to.

[prettier]: https://github.com/prettier/prettier
[order-imports]: https://github.com/Tibfib/eslint-plugin-import-helpers/blob/master/docs/rules/order-imports.md
