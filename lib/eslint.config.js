import globals from 'globals'

import coreConfiguration from './configurations/core.js'
import stylisticConfiguration from './configurations/plugins/stylistic.js'
import jestConfiguration from './configurations/plugins/jest.js'
import jsdocConfiguration from './configurations/plugins/jsdoc.js'
import openreachtechConfiguration from './configurations/plugins/openreachtech.js'

/**
 * ESLint Config
 *
 * @type {Array<import('eslint').Linter.FlatConfig>}
 */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
      },
      sourceType: 'module',
    },
  },

  /*
   * If ignores is used without any other keys in the configuration object, then the patterns act as global ignores. Here’s an example:
   *
   * https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores
   */
  {
    ignores: [
      '**/node_modules/**',
    ],
  },

  {
    files: [
      '**/*.cjs',
    ],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },

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
