describe('no if in describe()', () => {
  const condition = true

  if (condition) { // ❌ { selector: 'CallExpression[callee.name="describe"] IfStatement' } of `no-restricted-syntax`
    // noop
  }
})
