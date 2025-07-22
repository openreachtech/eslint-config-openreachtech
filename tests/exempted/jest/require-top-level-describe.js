// Above a describe block
test.todo('alpha test', () => {}) // ✅️ exempted `jest/require-top-level-describe`

describe('test suite', () => {
  test('to be same', () => {
    expect(1)
      .toBe(1)
  })
})

// Below a describe block
test.todo('beta test') // ✅️ exempted `jest/require-top-level-describe`
