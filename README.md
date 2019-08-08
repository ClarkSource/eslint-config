# Clark's eslint-config

[![Build Status](https://travis-ci.org/ClarkSource/eslint-config.svg)](https://travis-ci.org/ClarkSource/eslint-config)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![dependencies](https://img.shields.io/david/ClarkSource/eslint-config.svg)](https://david-dm.org/ClarkSource/eslint-config)
[![devDependencies](https://img.shields.io/david/dev/ClarkSource/eslint-config.svg)](https://david-dm.org/ClarkSource/eslint-config)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![CLARK Open Source](https://img.shields.io/badge/CLARK-Open%20Source-%232B6CDE.svg)](https://www.clark.de/de/jobs)

This repo contains all of [Clark](https://github.com/ClarkSource)'s
[eslint](https://eslint.org/) configuration presets.

- [**`@clark/eslint-config`**](/packages/eslint-config):
  The base config that all other configs extend from.
- [**`@clark/eslint-config-typescript`**](/packages/eslint-config-typescript):
  Adds support for parsing TypeScript, as well as TypeScript-specific rules.
- [**`@clark/eslint-config-node`**](/packages/eslint-config-node):
  Adds Node.js-specific rules and sets the environment.
- [**`@clark/eslint-config-node-typescript`**](/packages/eslint-config-node-typescript):
  Combines `eslint-config-node` and `eslint-config-typescript`.
- [**`@clark/eslint-config-node-order-imports`**](/packages/eslint-config-node-order-imports):
  Sorts ES module imports for Node.js projects.
- [**`@clark/eslint-config-browser`**](/packages/eslint-config-browser):
  Extends from the base config and sets the browser environment.
- [**`@clark/eslint-config-ember`**](/packages/eslint-config-ember):
  Extends from `eslint-config-browser` and adds Ember.js-specific rules to it.
- [**`@clark/eslint-config-ember-typescript`**](/packages/eslint-config-ember-typescript):
  Combines `eslint-config-ember` and `eslint-config-typescript`.
- [**`@clark/eslint-config-ember-order-imports`**](/packages/eslint-config-ember-order-imports):
  Sorts ES module imports for Ember.js projects.

There are also a few more plugins and utils in this repository:

- [**`@clark/eslint-plugin-import-helpers-with-package`**](/packages/eslint-plugin-import-helpers-with-package):
  Extends [`eslint-plugin-import-helpers/order-imports`][order-imports] so that
  it can infer the name of the package the file belongs to.
- [**`@clark/eslint-util-get-package`**](/packages/eslint-util-get-package):
  Finds the `package.json` a source file belongs to.

[order-imports]: https://github.com/Tibfib/eslint-plugin-import-helpers/blob/master/docs/rules/order-imports.md
