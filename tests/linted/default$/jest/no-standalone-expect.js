describe('a test', () => {
  expect(1) // ❌ `jest/no-standalone-expect`
    .toBe(1)
})

describe('a test', () => {
  test('an it', () => {
    expect(1)
      .toBe(1)
  })

  expect(1) // ❌ `jest/no-standalone-expect`
    .toBe(1)
})
