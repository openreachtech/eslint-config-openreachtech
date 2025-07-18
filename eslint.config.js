const coreConfiguration = require('./configurations/core')
const stylisticConfiguration = require('./configurations/plugins/stylistic')
const jestConfiguration = require('./configurations/plugins/jest')
const jsdocConfiguration = require('./configurations/plugins/jsdoc')
const openreachtechConfiguration = require('./configurations/plugins/openreachtech')

/**
 * ESLint Config
 *
 * @type {Array<import('eslint').Linter.FlatConfig>}
 */
export default [
  {
    languageOptions: {
      globals: {
        console: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
      },
      sourceType: 'commonjs',
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
      'eslint.config.mjs',
    ],
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
