import eslintCommentsPlugin from 'eslint-plugin-eslint-comments'

export default {
  plugins: {
    'eslint-comments': eslintCommentsPlugin,
  },

  rules: {
    ...eslintCommentsPlugin.configs.recommended.rules,

    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true,
      },
    ],
    'eslint-comments/no-aggregating-enable': [
      'error',
    ],
    'eslint-comments/no-duplicate-disable': [
      'error',
    ],
    'eslint-comments/no-unlimited-disable': [
      'error',
    ],
    'eslint-comments/no-unused-disable': [
      'error',
    ],
    'eslint-comments/no-unused-enable': [
      'error',
    ],
    'eslint-comments/no-restricted-disable': [
      'error',
      // There are 0 or more rest parameters in the array
      // type: glob pattern string
    ],
    'eslint-comments/no-use': [
      'error',
      {
        allow: [],
        // 'eslint'
        // 'eslint-disable'
        // 'eslint-disable-line'
        // 'eslint-disable-next-line'
        // 'eslint-enable'
        // 'eslint-env'
        // 'exported'
        // 'global'
        // 'globals'
      },
    ],
    'eslint-comments/require-description': [
      'error',
      {
        ignore: [],
        // 'eslint'
        // 'eslint-disable'
        // 'eslint-disable-line'
        // 'eslint-disable-next-line'
        // 'eslint-enable'
        // 'eslint-env'
        // 'exported'
        // 'global'
        // 'globals'
      },
    ],
  },
}
