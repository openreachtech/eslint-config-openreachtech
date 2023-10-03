'use strict'

// eslint-disable-next-line jest/require-top-level-describe
it('never use it()', () => { // ❌ `jest/consistent-test-it`
  expect(true)
    .toBeTruthy()
})

describe('jest/consistent-test-it', () => {
  it('never use it()', () => { // ❌ { withinDescribe: test } of `jest/consistent-test-it`
    expect(true)
      .toBeTruthy()
  })
})
