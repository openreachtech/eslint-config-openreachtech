describe('Sample', () => {
  test('never use "expect.anything()"', () => {
    expect({})
      .toBe(
        expect.anything() // ❌ `no-restricted-properties`
      )
  })
})
