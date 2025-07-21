describe('SampleClass', () => {
  test('should be correctly', () => {
    expect(1)
      .toBeGreaterThan(0)
    expect(2)
      .toBeGreaterThan(0)
    expect(3)
      .toBeGreaterThan(0)
    expect(4)
      .toBeGreaterThan(0)
    expect(5)
      .toBeGreaterThan(0)
    expect(6) // ✅️ `jext/max-expects`
      .toBeGreaterThan(0)
  })
})
