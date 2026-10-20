import openreachtechEslintConfig from './lib/eslint.config.js'
import coreRuleOptionHash from './lib/configurations/core-rule-option-hash.js'

export default [
  ...openreachtechEslintConfig,

  // Re-turn on some rules in test files.
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

      'jsdoc/require-jsdoc': [
        'error',
        {
          checkConstructors: true,
          checkGetters: true,
          checkSetters: true,
          contexts: [
            // 'ArrowFunctionExpression',
            // 'ClassDeclaration',
            // 'ClassExpression',
            'FunctionDeclaration',
            // 'FunctionExpression',
            'MethodDefinition',
          ],
          enableFixer: true,
          exemptEmptyConstructors: false, // true
          exemptEmptyFunctions: false,
          fixerMessage: '',
          minLineCount: -Infinity, // undefined
          publicOnly: false,
          require: {
            ArrowFunctionExpression: false,
            ClassDeclaration: false,
            ClassExpression: false,
            FunctionDeclaration: true,
            FunctionExpression: false,
            MethodDefinition: true, // false
          },
        },
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
