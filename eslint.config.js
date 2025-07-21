import openreachtechEslintConfig from './lib/eslint.config.js'

export default [
  ...openreachtechEslintConfig,

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
