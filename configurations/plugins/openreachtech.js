'use strict'

const openreachtechPlugin = require('eslint-plugin-openreachtech')

export default {
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
}
