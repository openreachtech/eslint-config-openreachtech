/* eslint-disable no-unused-vars */

describe('no ternary operator in describe()', () => {
  const condition = true

  const expected = condition // ❌ { selector: 'CallExpression[callee.name="describe"] ConditionalExpression' } of `no-restricted-syntax`
    ? 'alpha'
    : 'beta'
})
