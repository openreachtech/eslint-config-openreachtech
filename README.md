# ESLint Config for Open Reach Tech Inc.

## Language

* [English](./README.md)
* [日本語](./README.ja.md)

## Overview

ESLint shareable config for Open Reach Tech Inc.

This package is only for Flat Config.

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
| openreachtech | ESLint Open Reach Tech Inc. plugin rules |

##  Usage

### (1) Core Rules as is

When you want to use only core rules as is, please setup your `eslint.config.js` as follows:

```js
// eslint.config.js
import coreConfiguration from '@openreachtech/eslint-config/configurations/core.js'

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
import coreConfiguration from '@openreachtech/eslint-config/configurations/core.js'
import disableCoreStylisticConfiguration from '@openreachtech/eslint-config/configurations/disableCoreStylistic.js'

export default [
  // Configuration of core rules
  {
    ...coreConfiguration,

    rules: {
      ...coreConfiguration.rules,
      ...disableCoreStylisticConfiguration.rules, // Not required after v10.

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
import coreConfiguration from '@openreachtech/eslint-config/configurations/core.js'
import stylisticConfiguration from '@openreachtech/eslint-config/configurations/plugins/stylistic.js'
import jestConfiguration from '@openreachtech/eslint-config/configurations/plugins/jest.js'
import jsdocConfiguration from '@openreachtech/eslint-config/configurations/plugins/jsdoc.js'
import openreachtechConfiguration from './configurations/plugins/openreachtech.js'

export default [
  // Configuration of core rules
  {
    ...coreConfiguration,

    rules: {
      ...coreConfiguration.rules,
    },
  },

  // Configuration of stylistic rules
  {
    ...stylisticConfiguration,

    rules: {
      ...stylisticConfiguration.rules,
    },
  },

  // Configuration of Jest rules
  {
    ...jestConfiguration,

    rules: {
      ...jestConfiguration.rules,
    },
  },

  // Configuration of JSDoc rules
  {
    ...jsdocConfiguration,

    rules: {
      ...jsdocConfiguration.rules,
    },
  },

  // Configuration of OpenreachTech rules
  {
    ...openreachtechConfiguration,

    rules: {
      ...openreachtechConfiguration.rules,
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
