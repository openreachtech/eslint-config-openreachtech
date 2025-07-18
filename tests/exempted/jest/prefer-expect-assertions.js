describe('jest/prefer-expect-assertions', () => {
  test('allow no expect assertions', () => { // ✅ exempted `jest/prefer-expect-assertions`
    expect(true)
      .toBeTruthy()
  })
})
