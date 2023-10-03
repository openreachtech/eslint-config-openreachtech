'use strict'

/* eslint-disable jsdoc/require-jsdoc */

const alpha = {
  method () {
    return 'I am method'
  },
}

function betaFunc () {
  return alpha.method()
}

function gammaFunc () {
  return alpha['method']() // ✅ exempted `dot-notation`
}

module.exports = {
  betaFunc,
  gammaFunc,
}
