'use strict'

/* eslint-disable jest/consistent-test-it */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-test-prefixes */
/* eslint-disable jest/prefer-todo */
/* eslint-disable jest/require-top-level-describe */

/*
 * Disabled test suite
 * Disabled test
 */
describe.skip('foo', () => {}) // ❌ `jest/no-disabled-tests`
it.skip('foo', () => {}) // ❌ `jest/no-disabled-tests`
test.skip('foo', () => {}) // ❌ `jest/no-disabled-tests`

describe['skip']('bar', () => {}) // ❌ `jest/no-disabled-tests`
it['skip']('bar', () => {}) // ❌ `jest/no-disabled-tests`
test['skip']('bar', () => {}) // ❌ `jest/no-disabled-tests`

xdescribe('foo', () => {}) // ❌ `jest/no-disabled-tests`
xit('foo', () => {}) // ❌ `jest/no-disabled-tests`
xtest('foo', () => {}) // ❌ `jest/no-disabled-tests`

/*
 * Test is missing function argument
 */
it('bar') // ❌ `jest/no-disabled-tests`
test('bar') // ❌ `jest/no-disabled-tests`

/*
 * Old codes.
 */

describe.skip('beta', () => { // ❌ `jest/no-disabled-tests`
  const target = {}

  test('#method()', () => {
    expect(target)
      .toBeTruthy()
  })

  test('#extra()', () => {
    expect(target)
      .toBeTruthy()
  })
})

describe('gamma', () => {
  const target = {}

  test('#extra()', () => {
    expect(target)
      .toBeTruthy()
  })

  test.skip('constructor', () => { // ❌ `jest/no-disabled-tests`
    expect(target)
      .toBeTruthy()
  })
})

describe('Delta', () => {
  const target = {}

  test('#method()', () => {
    expect(target)
      .toBeTruthy()
  })

  it.skip('constructor', () => { // ❌ `jest/no-disabled-tests`
    expect(target)
      .toBeTruthy()
  })
})
