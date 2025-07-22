# ESLint Config for Open Reach Tech Inc.

## Language

* [English](./README.md)
* [日本語](./README.ja.md)

## Overview

ESLint shareable config for Open Reach Tech Inc.

This package is only for Flat Config and ECMAScript modules.

## Installing

Please add the following line to your `.npmrc` file.

```
@openreachtech:registry=https://npm.pkg.github.com
```

Install this package alongside ESLint v9.3.0 or greater:

```
npm install --save-dev \
  eslint \
  @openreachtech/eslint-config
```

## Composition

This package includes some ESLint configurations.

| configuration | contains |
| :-- | :-- |
| core | ESLint standard rules without stylistic plugin rules |
| stylistic | ESLint stylistic plugin rules |
| jest | ESLint Jest plugin rules |
| jsdoc | ESLint JSDoc plugin rules |
| eslint-comments | ESLint eslint-comments plugin rules |
| openreachtech | ESLint Open Reach Tech Inc. plugin rules |

##  Usage

### (1) Core Rules as is

When you want to use only core rules as is, please setup your `eslint.config.js` as follows:

```js
// eslint.config.js
import coreConfiguration from '@openreachtech/eslint-config'

export default [
  // Configuration of core rules
  {
    ...coreConfiguration,

    rules: {
      ...coreConfiguration.rules,
    },
  },
]
```

### (2) Core Rules with Some Overriding Rules

When you want to use core rules with some overriding rules, please setup your `eslint.config.js` as follows:

```js
// eslint.config.js
import coreConfiguration from '@openreachtech/eslint-config'

export default [
  // Configuration of core rules
  {
    ...coreConfiguration,

    rules: {
      ...coreConfiguration.rules,

      'id-length': [
        'error',
        {
          min: 1, // <--- 👀 overriding (default value: 2)
          max: Infinity,
          properties: 'always',
          exceptions: [],
          exceptionPatterns: [],
        },
      ],
    },
  },
]
```

### (3) Core and Some Plugins Rules

When you want to use core and some plugins rules, please setup your `eslint.config.js` as follows:

```js
// eslint.config.js
import {
  coreConfig,
  stylisticPluginConfig,
  jestPluginConfig,
  jsdocPluginConfig,
  eslintCommentsPluginConfig,
  openreachtechPluginConfig,
} from '@openreachtech/eslint-config'

export default [
  // Configuration of core rules
  {
    ...coreConfig,

    rules: {
      ...coreConfig.rules,
    },
  },

  // Configuration of stylistic rules
  {
    ...stylisticPluginConfig,

    rules: {
      ...stylisticPluginConfig.rules,
    },
  },

  // Configuration of Jest rules
  {
    ...jestPluginConfig,

    rules: {
      ...jestPluginConfig.rules,
    },
  },

  // Configuration of JSDoc rules
  {
    ...jsdocPluginConfig,

    rules: {
      ...jsdocPluginConfig.rules,
    },
  },

  // Configuration of eslint-comments rules
  {
    ...eslintCommentsPluginConfig,

    rules: {
      ...eslintCommentsPluginConfig.rules,
    },
  },

  // Configuration of OpenReachTech rules
  {
    ...openreachtechPluginConfig,

    rules: {
      ...openreachtechPluginConfig.rules,
    },
  },
]
```

### (4) All Rules as is

When you want to use our ESLint rules as is, please setup your `eslint.config.js` as follows:

```js
// eslint.config.js
import openreachtechConfig from '@openreachtech/eslint-config.js'

export default [
  ...openreachtechConfig,
]
```

## License

This project is released under the MIT License.

See → [LICENSE](./LICENSE)

## Contributing

We welcome bug reports, feature requests, and ruleset contributions.

Please feel free to contact us through GitHub Issues or Pull Requests.

We strive to meet user expectations and your contributions are highly appreciated!

```sh
% git clone https://github.com/openreachtech/eslint-config.git
% cd eslint-config
% npm install
% npm run lint
% npm test
```

## Copyright

© 2024 [Open Reach Tech Inc.](https://openreach.tech)
