/* eslint-disable jest/consistent-test-it */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/require-top-level-describe */

describe.only('foo', () => {}) // ❌ `jest/no-focused-tests`
it.only('foo', () => {}) // ❌ `jest/no-focused-tests`
describe['only']('bar', () => {}) // ❌ `jest/no-focused-tests`

it['only']('bar', () => {}) // ❌ `jest/no-focused-tests`
test.only('foo', () => {}) // ❌ `jest/no-focused-tests`
test['only']('bar', () => {}) // ❌ `jest/no-focused-tests`

// fdescribe and fit are also not allowed.

/*
 * Old codes.
 */

describe.only('alpha', () => { // ❌ `jest/no-focused-tests`
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

  test.only('super class', () => { // ❌ `jest/no-focused-tests`
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

  it.only('super class', () => { // ❌ `jest/no-focused-tests`
    expect(target)
      .toBeTruthy()
  })
})
