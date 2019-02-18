# Clark's eslint-config

[![Build Status](https://travis-ci.org/ClarkSource/eslint-config.svg)](https://travis-ci.org/ClarkSource/eslint-config)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![dependencies](https://img.shields.io/david/ClarkSource/eslint-config.svg)](https://david-dm.org/ClarkSource/eslint-config)
[![devDependencies](https://img.shields.io/david/dev/ClarkSource/eslint-config.svg)](https://david-dm.org/ClarkSource/eslint-config)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

This repo contains all of [Clark](https://github.com/ClarkSource)'s
[eslint](https://eslint.org/) configuration presets.

- [**`@clarkapp/eslint-config`**](/packages/eslint-config): The base config that
  all other configs extend from.
- [**`@clarkapp/eslint-config-typescript`**](/packages/eslint-config-typescript):
  Adds support for parsing TypeScript, as well as TypeScript-specific rules.
- [**`@clarkapp/eslint-config-node`**](/packages/eslint-config-node): Adds
  Node.js-specific rules and sets the environment.
- [**`@clarkapp/eslint-config-node-typescript`**](/packages/eslint-config-node-typescript):
  Combines `eslint-config-node` and `eslint-config-typescript`.
- [**`@clarkapp/eslint-config-browser`**](/packages/eslint-config-browser):
  Extends from the base config and sets the browser environment.
- [**`@clarkapp/eslint-config-ember`**](/packages/eslint-config-ember): Extends
  from `eslint-config-browser` and adds Ember.js-specific rules to it.
- [**`@clarkapp/eslint-config-ember-typescript`**](/packages/eslint-config-ember-typescript):
  Combines `eslint-config-ember` and `eslint-config-typescript`.
