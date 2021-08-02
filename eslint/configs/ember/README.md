<p align="center">
  <a href="https://github.com/ClarkSource/eslint-config#readme">
    <br><br><br><br><br>
    <img alt="CLARK" src="https://raw.githubusercontent.com/ClarkSource/eslint-config/HEAD/docs/assets/clark.svg" height="40">
    <br><br><br><br><br>
  </a>
</p>

# `@clark/eslint-config-ember`

![Node CI](https://github.com/ClarkSource/eslint-config/workflows/Node%20CI/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![dependencies](https://david-dm.org/ClarkSource/eslint-config/status.svg?path=eslint/configs/ember)](https://david-dm.org/ClarkSource/eslint-config?path=eslint/configs/ember)
[![devDependencies](https://david-dm.org/ClarkSource/eslint-config/dev-status.svg?path=eslint/configs/ember)](https://david-dm.org/ClarkSource/eslint-config?path=eslint/configs/ember&type=dev)
[![CLARK Open Source](https://img.shields.io/badge/CLARK-Open%20Source-%232B6CDE.svg)](https://www.clark.de/de/jobs)

> CLARK's eslint-config for Ember.js

## Installation

```bash
# With TypeScript
yarn add -D eslint @clark/eslint-config-ember @clark/eslint-config-node typescript @clark/eslint-config-ember-typescript

# Without TypeScript
yarn add -D eslint @clark/eslint-config-ember @clark/eslint-config-node
```

## Setup

Ember projects consist of up to three different types of JS source files:

**Apps**

- Files in the `app` tree or `src` tree (Module Unification) and `tests` tree /
  dummy app
- Node.js source files, like `ember-cli-build.js` or `config/environment.js`

**Addons**

- Files in the `addon` tree or `src` tree (Module Unification) and `tests` tree /
  dummy app
- Files in the `app` tree, which usually re-export files from `addon`
- Node.js source files, like `index.js`

Node.js and Ember source files obviously have fundamentally different linting
requirements. The official Ember blueprint currently solves this by adding
[`overrides`](overrides) for Node files and just using a single `.eslintrc.js`.

[overrides]: https://eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files

We have found this to be very brittle and hard to maintain on the long run. A
detailed argument can be found in this
[Pre-RFC #450 "change eslint blueprint"][ember-rfc].

[ember-rfc]: https://github.com/emberjs/rfcs/issues/450

While the world is still waiting for [eslint/rfcs#9][eslint-rfc] to bring a new
and better config system to the table, we have found it much more feasible to
create multiple [`root: true`][root] `.eslintrc.js` files instead of using
`overrides`.

[eslint-rfc]: https://github.com/eslint/rfcs/pull/9
[root]: https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy

Remember to create `.eslintignore` files! Otherwise `eslint` might _seemingly_
hang indefinitely, because it tries to lint your huge bundled dist files or
`node_modules`.

Furthermore, we recommend to remove any linting integration from `ember-cli`.
So this means uninstalling `ember-cli-eslint` and installing `eslint` instead.
The default `lint:js` task (`eslint .`) is sufficient. When you want to use
TypeScript, e.g. via
[`@clark/eslint-config-ember-typescript`][eslint-config-ember-typescript] you
have to update it to `eslint --ext ts,js .`.

[eslint-config-ember-typescript]: /eslint/configs/ember-typescript

You can also remove any other pre-installed eslint dependencies, like
`eslint-plugin-ember` and `eslint-plugin-node`. They are included in our
configs.

### Addons

```
.
├── .eslintrc.js
├── addon
│   └── .eslintrc.js
├── app
│   └── .eslintrc.js
└── tests
    ├── .eslintrc.js
    └── dummy
        └── config
            └── .eslintrc.js
```

```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: "@clark/node",
};
```

```js
// addon/.eslintrc.js
module.exports = {
  root: true,
  extends: "@clark/ember-typescript",
};
```

```js
// addon-test-support/.eslintrc.js
module.exports = {
  root: true,
  extends: "@clark/ember-typescript",
};
```

```js
// app/.eslintrc.js
module.exports = {
  root: true,
  // Since `app` is merged with the parent app, which is not guaranteed to have
  // TypeScript installed, we need to restrict ourselves to JavaScript only.
  extends: "@clark/ember",
};
```

```js
// tests/.eslintrc.js
module.exports = {
  root: true,
  extends: "@clark/ember-typescript/test",
};
```

```js
// tests/dummy/config/.eslintrc.js
module.exports = {
  root: true,
  extends: "@clark/node",
};
```

#### Live Examples

- [`ember-link`](https://github.com/buschtoens/ember-link)
- [`ember-on-modifier`](https://github.com/buschtoens/ember-on-modifier)
- [`ember-dead-code`](https://github.com/buschtoens/ember-dead-code)
- [`ember-route-task-helper`](https://github.com/buschtoens/ember-route-task-helper)

### Apps

```
.
├── .eslintrc.js
├── app
│   └── .eslintrc.js
└── tests
    ├── .eslintrc.js
    └── dummy
        └── config
            └── .eslintrc.js
```

```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: "@clark/node",
};
```

```js
// app/.eslintrc.js
module.exports = {
  root: true,
  extends: "@clark/ember-typescript",
};
```

```js
// tests/.eslintrc.js
module.exports = {
  root: true,
  extends: "@clark/ember-typescript/test",
};
```

```js
// tests/dummy/config/.eslintrc.js
module.exports = {
  root: true,
  extends: "@clark/node",
};
```
