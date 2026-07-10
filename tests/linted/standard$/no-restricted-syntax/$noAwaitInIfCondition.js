/**
 * Alpha function.
 *
 * @returns {Promise<void>} A promise that resolves when the function is complete.
 */
async function alphaFunc () {
  if (await alphaFunc()) { // ❌ { selector: 'IfStatement[test] AwaitExpression' } of `no-restricted-syntax`
    // Do something
  }
}

/**
 * Beta function.
 *
 * @returns {Promise<boolean>} A promise that resolves when the function is complete.
 */
async function betaFunc () {
  return true
}

export default {
  alphaFunc,
  betaFunc,
}
