'use strict'

describe('TargetClass', () => { // ✅ { ignoreTopLevelDescribe: true } of `jest/prefer-lowercase-title`
  test('to be same', () => {
    expect(true)
      .toBeTruthy()
  })
})

describe('TargetClass', () => { // ✅ { ignoreTopLevelDescribe: true } of `jest/prefer-lowercase-title`
  describe('SecondLevel describe() is not allowed to start with upper case', () => { // ❌ { ignoreTopLevelDescribe: true } of `jest/prefer-lowercase-title`
    test('to be same', () => {
      expect(true)
        .toBeTruthy()
    })
  })
})
