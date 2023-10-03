'use strict'

/* eslint-disable jsdoc/require-jsdoc */

const alpha = 60 * 60 * 24 * 1000 // ✅ `no-magic-numbers`

const beta = 1 // ✅ ignore:[-1, 0, 1] of `no-magic-numbers`

function noMagicNumber (arg = 9999) { // ✅ ignoreDefaultValues:true of `no-magic-numbers`
  const array = [10, 20, 30] // ✅ ignoreArrayIndexes:true of `no-magic-numbers`

  if (array.indexOf(arg) === -1) { // ✅ ignore:[-1, 0, 1] of `no-magic-numbers`
    return null
  }

  return {
    arg,
    extra: 1.5, // ✅ detectObjects:false of `no-magic-numbers`
  }
}

module.exports = {
  alpha,
  beta,
  noMagicNumber,
}
