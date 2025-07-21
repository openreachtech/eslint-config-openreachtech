// @ts-check
/** func-call-spacing
 *  func-call-spacing: ["error", "never"]
 *  npx eslint playground\func-call-spacing.js --no-ignore
 *  message: 'Unexpected whitespace between function name and paren'
 */

// incorrect code
fn ()

fn2
()

// correct code
fn3()

function fn () {
  return 0
}

function fn2 () {
  return 1
}

function fn3 () {
  return 2
}
