/* eslint-disable jsdoc/require-jsdoc */

const alpha = {
  method () {
    return 'I am method'
  },
}

function betaFunc () {
  return alpha. // ❌ `dot-location` - Expected dot to be on same line as object.
    method()
}

export default {
  betaFunc,
}
