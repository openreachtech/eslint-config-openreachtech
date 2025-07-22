/* eslint-disable jest/consistent-test-it */

////////////////////////////////////////////////////////////////////////////////
// Empty Title

describe('', () => {}) // ❌ `jest/valid-title`

describe('Target', () => {
  it('', () => { // ❌ `jest/valid-title`
    expect(true)
      .toBeTruthy()
  })
})

it('', () => { // ❌ `jest/valid-title`
  expect(true)
    .toBeTruthy()
})

test('', () => { // ❌ `jest/valid-title`
  expect(true)
    .toBeTruthy()
})

////////////////////////////////////////////////////////////////////////////////
// Accidental Spaced Title

describe(' Target', () => { // ❌ `jest/valid-title`
  test.todo('#method()')
})

describe('Target  ', () => { // ❌ `jest/valid-title`
  test.todo('#method()')
})

test.todo(' #method()') // ❌ `jest/valid-title`
it.todo(' #method()') // ❌ `jest/valid-title`

describe('Target', () => {
  test.todo(' #method()') // ❌ `jest/valid-title`
  test.todo('#method() ') // ❌ `jest/valid-title`
})

////////////////////////////////////////////////////////////////////////////////
// { mustNotMatch: '\\.$' } of `jest/valid-title`

describe('Target.', () => { // ❌ { mustNotMatch: '\\.$' } of `jest/valid-title`
  test.todo('#method().') // ❌ { mustNotMatch: '\\.$' } of `jest/valid-title`
})
