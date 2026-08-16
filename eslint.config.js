import openreachtechEslintConfig from './lib/eslint.config.js'
import coreRuleOptionHash from './lib/configurations/core-rule-option-hash.js'

export default [
  ...openreachtechEslintConfig,

  {
    files: [
      'tests/**/*.js',
    ],
    rules: {
      'max-classes-per-file': [
        'error',
        {
          max: 1,
          ignoreExpressions: true, // false
        },
      ],
      'no-restricted-syntax': [
        'error',
        // There are 0 or more rest parameters in the array
        // string | { selector: string, message: string }
        ...coreRuleOptionHash['no-restricted-syntax'].spreadOptions,
      ],
      'no-undefined': [
        'error',
      ],
    },
  },

  // Disable ESLint Comments rules for CI
  {
    rules: {
      'eslint-comments/disable-enable-pair': 'off',
      'eslint-comments/no-aggregating-enable': 'off',
      'eslint-comments/no-duplicate-disable': 'off',
      'eslint-comments/no-unlimited-disable': 'off',
      'eslint-comments/no-unused-disable': 'off',
      'eslint-comments/no-unused-enable': 'off',
      'eslint-comments/no-restricted-disable': 'off',
      'eslint-comments/no-use': 'off',
      'eslint-comments/require-description': 'off',
    },
  },
]
