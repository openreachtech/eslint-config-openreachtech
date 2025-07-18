// Above a describe block
test.todo('alpha test', () => {}) // ❌ `jest/require-top-level-describe`

describe('test suite', () => {
  test('to be same', () => {
    expect(1)
      .toBe(1)
  })
})

// Below a describe block
test.todo('beta test') // ❌ `jest/require-top-level-describe`
