describe('No expect.any(Object) rule', () => {
  test('do not use expect.any(Object)', () => {
    const actual = {}

    expect(actual)
      .toEqual(expect.any(Object)) // ❌️ { selector: 'CallExpression[callee.type=MemberExpression][callee.object.name=expect][callee.property.name="any"][arguments.0.name=Object]' } of `no-restricted-syntax`
  })
})
