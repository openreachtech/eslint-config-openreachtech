'use strict'

/* eslint-disable jsdoc/require-jsdoc */

const ninja = 'ninja'

function alphaFunc () {
  const ninja = 'ninja' // ❌ `no-shadow`

  return ninja
}

const betaFunc = function () {
  const ninja = 'ninja' // ❌ `no-shadow`

  return ninja
}

function gammaFunc (ninja) { // ❌ `no-shadow`
  return ninja + 1
}

if (ninja) {
  const ninja = 'spy' // ❌ `no-shadow`

  gammaFunc(ninja)
}

try {
  // noop
} catch (ninja) { // ❌ `no-shadow`
  // noop
}

///////////////////////////////////////////////////////////////////////////////
// builtinGlobals: true

function deltaFunc () {
  const Object = 0 // ❌ builtinGlobals:true of `no-shadow`

  return Object
}

///////////////////////////////////////////////////////////////////////////////
// hoist: all

if (ninja) {
  const epsilon = 1 // ❌ hoist:all of `no-shadow`
  const zetaFunc = it => it + 10 // ❌ hoist:all of `no-shadow`

  zetaFunc(epsilon)
}

const epsilon = 3

function zetaFunc () {
  return 'zeta'
}

///////////////////////////////////////////////////////////////////////////////
// ignoreOnInitialization: false

const etaFunc = etaFunc => etaFunc() // ❌ ignoreOnInitialization:false of `no-shadow`

///////////////////////////////////////////////////////////////////////////////

/**
 * Test function.
 *
 * @param {{
 *   test: number
 * }} params - Name hash.
 * @returns {string} - Full value.
 */
const testFunc = function ({
  test, // ❌ `no-shadow` (for jest)
}) {
  return `test: ${test}`
}

export default {
  alphaFunc,
  betaFunc,
  gammaFunc,
  deltaFunc,
  epsilon,
  zetaFunc,
  etaFunc,

  testFunc,
}
