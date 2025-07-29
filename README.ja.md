# ESLint Config for Open Reach Tech Inc.

## Language

* [English](./README.md)
* [日本語](./README.ja.md)

## Overview

Open Reach Tech株式会社で使っている ESLint 設定です。

此のパッケージは、ESLint Flat Config と ECMAScript modules のみ対応しています。

## Installing

`.npmrc` に以下を追加してください。

```
@openreachtech:registry=https://npm.pkg.github.com
```

ESLint v9.31.0 以降と一緒に此のパッケージをインストールします。

```
npm install --save-dev \
  eslint \
  @openreachtech/eslint-config
```

## Composition

此のパッケージには、以下の ESLint コンフィギュレーションが含まれます。

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

コアルールだけをそのまま使う場合、`eslint.config.js` を以下の様に設定してください。

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

コアルールの一部を上書きして使う場合、`eslint.config.js` を以下の様に設定してください。


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

コアルールとプラグインルールを使う場合、`eslint.config.js` を以下の様に設定してください。

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

私達の ESLint ルールをそのまま使う場合、`eslint.config.js` を以下の様に設定してください。

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

バグレポート、機能リクエスト、ルールセットの貢献を歓迎します。

GitHub Issues または Pull Request を通じてお気軽にご提案ください。

私たちはユーザーの期待に応えるよう活動しており、貢献を高く評価します。

```sh
% git clone https://github.com/openreachtech/eslint-config.git
% cd eslint-config
% npm install
% npm run lint
% npm test
```

## Copyright

© 2024 [Open Reach Tech株式会社](https://openreach.tech)
