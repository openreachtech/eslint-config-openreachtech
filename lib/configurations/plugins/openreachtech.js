import openreachtechPlugin from 'eslint-plugin-openreachtech'

import preferAmericanSpell from '../../rules/prefer-american-spell/index.js'

export default {
  plugins: {
    openreachtech: {
      ...openreachtechPlugin,

      rules: {
        ...openreachtechPlugin.rules,

        'prefer-american-spell': preferAmericanSpell,
      },
    },
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
      /*
       * Since this rule has a bug with `--fix` option,
       * it is disabled temporarily.
       *
       * NOTE: Since there is `@stylistic/space-infix-ops` rule,
       * Perhaps it is OK to disable this rule permanently.
       */
      'off', // 'error'
    ],

    'openreachtech/prefer-american-spell': [
      'error',
      {
        cancelled: 'canceled',
        analyse: 'analyze',
      },
    ],
  },
}
