const values = [1, 3, 5, 7, 9]

values.forEach(it => {
  convert({
    value: it > 5 // ❌️ { selector: 'CallExpression[callee.property.name=forEach] ConditionalExpression' } of `no-restricted-syntax`
      ? 'greater'
      : 'smaller',
  })
})

/**
 * Converts a value based on the input parameter.
 *
 * @param {{
 *   value: string
 * }} params - Parameters for the function
 * @returns {string} - Returns the value passed in
 */
function convert ({
  value,
}) {
  return value
}
