import {
  ESLintInspector,
} from '@openreachtech/eslint-inspector'

const messageHash = {
  'no-restricted-syntax': {
    noDoWhile: 'Never use do-while',
    noFor: 'Never use for',
    noForEach: 'Never use forEach method',
    noForIn: 'Never use for-in',
    noForOf: 'Never use for-of',
    noIfInHigherOrderFunc: 'Never use if in higher-order function',
    noLet: 'Never use let',
    noNestedIf: 'Never use nested-if including else-if',
    noIdentifierWithDataSuffix: 'Not allowed to use "Data" as suffix of identifier',
    noIdentifierWithInfoSuffix: 'Not allowed to use "Info" as suffix of identifier',
    noIdentifierWithItemSuffix: 'Not allowed to use "Item" as suffix of identifier',
    noIdentifierWithListSuffix: 'Not allowed to use "List" as suffix of identifier',
    noIdentifierWithManagerSuffix: 'Not allowed to use "Manager" as suffix of identifier',
    noSwitch: 'Never use switch',
    noWhile: 'Never use while',
  },
  'no-restricted-properties': {
    expectAnything: "'expect.anything' is restricted from being used. Never use `expect.anything\\(\\)`", // \\(\\) meaning: this message will be passed new RegExp() as is in Analyzer.
    ObjectAssign: "'Object.assign' is restricted from being used. Never use `Object.assign\\(\\)`",
  },
}

describe('verify ESLint config', () => {
  test('should work as expected', async () => {
    const inspector = await ESLintInspector.createAsyncWithFilePaths({
      messageHash,
      filePaths: [
        'tests/linted/',
      ],
    })

    const unexpectedLog = await inspector.getUnexpectedLog()

    expect(unexpectedLog)
      .toBeNull()
  }, 10000) // 10 seconds timeout
})
