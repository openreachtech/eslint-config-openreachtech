import {
  ESLintInspector,
} from '@openreachtech/eslint-inspector'

const messageHash = {
  'no-restricted-syntax': {
    noAwaitInIfCondition: 'Do not use await in if condition',
    noDoWhile: 'Never use do-while',
    noFor: 'Never use for',
    noForEachContainsAssignment: 'Do not use assignment inside Array#forEach\\(\\)',
    noForIn: 'Never use for-in',
    noForOf: 'Never use for-of',
    noIfInHigherOrderFunc: 'Never use if in higher-order function',
    noLet: 'Never use let',
    noNestedIf: 'Never use nested-if including else-if',
    noConstructorWithCallingFunction: 'Do not call methods or functions in constructor',
    noConstructorWithIfStatements: 'Do not use `if` statements in constructor',
    noConstructorWithTernaryOperator: 'Do not use ternary operator in constructor',
    noDescribeWithIfStatements: 'Do not use `if` statements in `describe\\(\\)`',
    noDescribeWithTernaryOperator: 'Do not use ternary operator in `describe\\(\\)`',
    noExpectAnyWithObject: 'Do not use expect.any\\(Object\\)',
    noIdentifierByCanceled: 'Use "canceled" instead of "cancelled" as identifier',
    noIdentifierWithDataSuffix: 'Not allowed to use "Data" as suffix of identifier because every value is data, name its kind such as "UserRecord" instead',
    noIdentifierWithHelperSuffix: 'Not allowed to use "Helper" as suffix of identifier because it does not say what the code does, name the duty such as "PathnameBuilder" instead',
    noIdentifierWithInfoSuffix: 'Not allowed to use "Info" as suffix of identifier because it does not say what the value holds, name the content such as "UserProfile" instead',
    noIdentifierWithItemSuffix: 'Not allowed to use "Item" as suffix of identifier because it names no kind of element, name the element such as "Product" instead',
    noIdentifierWithListSuffix: 'Not allowed to use "List" as suffix of identifier because it describes the container rather than the content, use a plural noun such as "users" instead',
    noIdentifierWithManagerSuffix: 'Not allowed to use "Manager" as suffix of identifier because it takes every duty, name the one duty such as "Scheduler" instead',
    noIdentifierWithUtilsSuffix: 'Not allowed to use "Utils" as suffix of identifier because it gathers unrelated functions, name a class for each duty such as "DateFormatter" instead',
    noIdentifierWithWrapperSuffix: 'Not allowed to use "Wrapper" as suffix of identifier because it names the mechanism, name the role such as "Adapter" instead',
    noShortCircuitEvaluation: 'Use `\\?\\?` instead of short-circuit evaluation with `\\|\\|` operator',
    noConstructorPassedToHigherOrderFunc: 'Do not pass constructors \\(e\\.g\\., Boolean, Number, String\\) to higher-order functions',
    noStaticClass: 'Do not declare static class',
    noSwitch: 'Never use switch',
    noTernaryInForEach: 'Never use ternary operator inside `Array#forEach\\(\\)`',
    noWhile: 'Never use while',
  },
  'no-restricted-properties': {
    ArrayReverse: "'reverse' is restricted from being used. Use `Array#toReversed\\(\\)` instead of `Array#reverse\\(\\)`",
    ArraySort: "'sort' is restricted from being used. Use `Array#toSorted\\(\\)` instead of `Array#sort\\(\\)`",
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
