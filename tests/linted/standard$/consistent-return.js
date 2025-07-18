'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function alphaFunc (condition) {
  if (!condition) {
    return
  }

  return true // ❌ `consistent-return`
}

function betaFunc (condition) { // ❌ `consistent-return`
  if (condition) {
    return true
  }

  // no return
}

function gammaFunc (teardownFunc) {
  if (teardownFunc) {
    return void teardownFunc() // eslint-disable-line no-void
  }

  return true // ❌ `consistent-return`
}

function deltaFunc (condition) {
  if (condition) {
    return undefined
  }

  return true // ❌ `consistent-return`
}

export default {
  alphaFunc,
  betaFunc,
  gammaFunc,
  deltaFunc,
}
