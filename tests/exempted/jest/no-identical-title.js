'use strict'

describe('Target', () => {
  test('to be same', () => {
    expect(true)
      .toBeTruthy()
  })
})

describe('Target', () => { // ✅ exempted `jest/no-identical-title`
  test('to be same', () => {
    expect(true)
      .toBeTruthy()
  })
})
