import jestConfiguration from '@openreachtech/eslint-rules-default-jest'

export default {
  ...jestConfiguration,

  rules: {
    ...jestConfiguration.rules,

    'jest/consistent-test-it': [
      'error',
      {
        fn: 'test',
        withinDescribe: 'test', // 'it'
      },
    ],
    'jest/max-expects': [
      'off', // 'error'
      {
        max: 5,
      },
    ],
    'jest/no-hooks': [
      'off', // 'error'
      {
        allow: [
          'beforeAll',
          'beforeEach',
          'afterAll',
          'afterEach',
        ],
      },
    ],
    'jest/no-identical-title': [
      'off', // 'error'
    ],
    'jest/prefer-expect-assertions': [
      'off', // 'error'
    ],
    'jest/prefer-lowercase-title': [
      'off', // 'error'
      {
        ignore: [],
        allowedPrefixes: [],
        ignoreTopLevelDescribe: true, // false
      },
    ],
    'jest/prefer-strict-equal': [
      'off', // 'error'
    ],
    'jest/require-hook': [
      'off', // 'error'
      {
        allowedFunctionCalls: [],
      },
    ],
    'jest/valid-title': [
      'error',
      {
        ignoreSpaces: false,
        ignoreTypeOfDescribeName: false,
        disallowedWords: [],
        mustMatch: {},
        mustNotMatch: [ // {}
          '\\.$',
          'Titles should not end with a full-stop (.)',
        ],
      },
    ],
  },
}
