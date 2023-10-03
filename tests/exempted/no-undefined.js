'use strict'

/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable no-shadow */
/* eslint-disable no-shadow-restricted-names */

const alpha = undefined // ✅ exempted `no-undefined`

{
  // eslint-disable-next-line no-unused-vars
  const undefined = 'string value' // ✅ exempted `no-undefined`
}

if (alpha === undefined) { // ✅ exempted `no-undefined`
  // noop
}

function betaFunc (undefined) { // ✅ exempted `no-undefined`
  // noop
}

function gammaFunc (first) {
  return first
}

// eslint-disable-next-line jest/require-hook
gammaFunc(undefined) // ✅ exempted `no-undefined`

module.exports = {
  alpha,
  betaFunc,
  gammaFunc,
}
