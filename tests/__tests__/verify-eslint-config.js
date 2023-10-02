'use strict'

const {
  ESLintInspector,
} = require('@openreachtech/eslint-inspector')

const messageHash = {
  noDoWhile: 'Never use do-while',
  noFor: 'Never use for',
  noForEach: 'Never use forEach method',
  noForIn: 'Never use for-in',
  noForOf: 'Never use for-of',
  noIfInHigherOrderFunc: 'Never use if in higher-order function',
  noLet: 'Never use let',
  noNestedIf: 'Never use nested-if including else-if',
  noSuffix: 'Not allowed to use "Data", "Info", "Item", "List", and "Manager" as suffix of identifier.',
  noSwitch: 'Never use switch',
  noWhile: 'Never use while',
}

describe('verify ESLint config', () => {
  test('should work as expected', async () => {
    const inspector = await ESLintInspector.createAsyncWithFilePaths({
      messageHash,
      filePaths: [
        'tests/linted/',
      ],
    })

    const unexpectedLog = await inspector.getFormattedLogIfUnexpected()

    expect(unexpectedLog)
      .toBeNull()
  })
})
