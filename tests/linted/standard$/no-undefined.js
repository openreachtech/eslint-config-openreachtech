/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable no-shadow */
/* eslint-disable no-shadow-restricted-names */

const alpha = undefined // ❌️ `no-undefined`

{
  // eslint-disable-next-line no-unused-vars
  const undefined = 'string value' // ❌️ `no-undefined`
}

if (alpha === undefined) { // ❌️ `no-undefined`
  // noop
}

function betaFunc (undefined) { // ❌️ `no-undefined`
  // noop
}

function gammaFunc (first) {
  return first
}

gammaFunc(undefined) // ❌️ `no-undefined`

export default {
  alpha,
  betaFunc,
  gammaFunc,
}
