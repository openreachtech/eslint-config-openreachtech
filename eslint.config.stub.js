'use strict'

const allRules = require('@openreachtech/eslint-rules-default')
const {
  default: jestPlugin,
} = require('@openreachtech/eslint-rules-default-jest')
const {
  default: jsdocPlugin,
} = require('@openreachtech/eslint-rules-default-jsdoc')
const openreachtechPlugin = require('eslint-plugin-openreachtech')

/**
 * ESLint Config
 *
 * @type {Array<import('eslint').Linter.FlatConfig>}
 */
module.exports = [
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
    ],
  },

  {
    rules: {
      ...allRules.core.rules,
      ...allRules.disableCoreStylistic.rules,
    },
  },
  {
    ...jestPlugin,

    rules: {
      ...jestPlugin.rules,
    },
  },
  {
    ...jsdocPlugin,

    rules: {
      ...jsdocPlugin.rules,
    },
  },
  {
    plugins: {
      openreachtech: openreachtechPlugin,
    },
    rules: {
      'openreachtech/empty-line-after-super': [
        'error',
      ],
      'openreachtech/indent-in-infix-expression': [
        'error',
      ],
      'openreachtech/newline-per-parameter': [
        'error',
      ],
      'openreachtech/no-if-in-oneline': [
        'error',
      ],
      'openreachtech/no-unexpected-multiline': [
        'error',
      ],
    },
  },
]
