'use strict'

describe('Sample', () => {
  test('sample', () => {
    const expected = {
      alpha: 1,
      beta: 2,
    }

    expect(expected)
      .toEqual({ // ✅ `jest/prefer-strict-equal`
        alpha: 1,
        beta: 2,
      })
  })
})
