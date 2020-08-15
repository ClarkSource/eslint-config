# `@clark/eslint-util-get-package`

![Node CI](https://github.com/ClarkSource/eslint-config/workflows/Node%20CI/badge.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![dependencies](https://david-dm.org/ClarkSource/eslint-config/status.svg?path=packages/eslint-util-get-package)](https://david-dm.org/ClarkSource/eslint-config?path=packages/eslint-util-get-package)
[![devDependencies](https://david-dm.org/ClarkSource/eslint-config/dev-status.svg?path=packages/eslint-util-get-package)](https://david-dm.org/ClarkSource/eslint-config?path=packages/eslint-util-get-package&type=dev)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![CLARK Open Source](https://img.shields.io/badge/CLARK-Open%20Source-%232B6CDE.svg)](https://www.clark.de/de/jobs)

> Finds the `package.json` a source file belongs to.

```ts
import getPackage from "@clark/eslint-util-get-package";

export const rules = {
  "some-rule": {
    create(context) {
      const fileName = context.getFilename();
      const packageJSON = getPackage(fileName);

      if (!packageJSON)
        throw new Error(
          `Could not find a 'package.json' that '${fileName}' belongs to.`
        );

      console.log(`'${fileName}' belongs to ${packageJSON.name}.`);

      // ...
    },
  },
};
```
