'use strict'

/* eslint-disable eqeqeq */
/* eslint-disable jsdoc/require-jsdoc */

const alpha = 1 + // ❌ before of `operator-linebreak`
  2

function alphaFunc () {
  // eslint-disable-next-line no-restricted-syntax
  let number = 0

  number
    = 3 // ❌ overrides: { =: after } of `operator-linebreak`
  number
    += 4 // ❌ overrides: { +=: after } of `operator-linebreak`
  number
    -= 5 // ❌ overrides: { -=: after } of `operator-linebreak`
  number
    *= 6 // ❌ overrides: { *=: after } of `operator-linebreak`
  number
    /= 7 // ❌ overrides: { /=: after } of `operator-linebreak`
  number
    %= 8 // ❌ overrides: { %=: after } of `operator-linebreak`
  number
    **= 9 // ❌ overrides: { **=: after } of `operator-linebreak`
  number
    <<= 10 // ❌ overrides: { <<=: after } of `operator-linebreak`
  number
    >>= 11 // ❌ overrides: { >>=: after } of `operator-linebreak`
  number
    >>>= 12 // ❌ overrides: { >>>=: after } of `operator-linebreak`
  number
    &= 13 // ❌ overrides: { &=: after } of `operator-linebreak`
  number
    |= 15 // ❌ overrides: { |=: after } of `operator-linebreak`
  number
    ^= 14 // ❌ overrides: { ^=: after } of `operator-linebreak`

  return number
}

// logical operators
const alphaCondition = true
const betaCondition = false

const orResult = alphaCondition || // ❌ before of `operator-linebreak`
  betaCondition
const andResult = alphaCondition && // ❌ before of `operator-linebreak`
  betaCondition

// ternary operator
const ternaryResult = alphaCondition ? // ❌ overrides: { ?: after } of `operator-linebreak`
  1000 : // ❌ overrides: { :: after } of `operator-linebreak`
  2000

// binary operators
const plusResult = 1 + // ❌ before of `operator-linebreak`
  2
const minusResult = 1 - // ❌ before of `operator-linebreak`
  2
const multiplyResult = 1 * // ❌ before of `operator-linebreak`
  2
const divideResult = 1 / // ❌ before of `operator-linebreak`
  2
const remainderResult = 1 % // ❌ before of `operator-linebreak`
  2
const exponentiationResult = 1 ** // ❌ before of `operator-linebreak`
  2
const leftShiftResult = 1 << // ❌ before of `operator-linebreak`
  2
const rightShiftResult = 1 >> // ❌ before of `operator-linebreak`
  2
const unsignedRightShiftResult = 1 >>> // ❌ before of `operator-linebreak`
  2
const bitwiseAndResult = 1 & // ❌ before of `operator-linebreak`
  2
const bitwiseXorResult = 1 ^ // ❌ before of `operator-linebreak`
  2
const bitwiseOrResult = 1 | // ❌ before of `operator-linebreak`
  2
const lessThanResult = 1 < // ❌ before of `operator-linebreak`
  2
const lessThanOrEqualResult = 1 <= // ❌ before of `operator-linebreak`
  2
const greaterThanResult = 1 > // ❌ before of `operator-linebreak`
  2
const greaterThanOrEqualResult = 1 >= // ❌ before of `operator-linebreak`
  2

/** @type {string} */
const alphaText = 'alpha'
const betaText = 'beta'

const equalResult = alphaText == // ❌ before of `operator-linebreak`
  betaText
const notEqualResult = alphaText != // ❌ before of `operator-linebreak`
  betaText
const strictEqualResult = alphaText === // ❌ before of `operator-linebreak`
  betaText
const strictNotEqualResult = alphaText !== // ❌ before of `operator-linebreak`
  betaText

module.exports = {
  alpha,
  alphaFunc,
  orResult,
  andResult,
  ternaryResult,
  plusResult,
  minusResult,
  multiplyResult,
  divideResult,
  remainderResult,
  exponentiationResult,
  leftShiftResult,
  rightShiftResult,
  unsignedRightShiftResult,
  bitwiseAndResult,
  bitwiseXorResult,
  bitwiseOrResult,
  lessThanResult,
  lessThanOrEqualResult,
  greaterThanResult,
  greaterThanOrEqualResult,
  equalResult,
  notEqualResult,
  strictEqualResult,
  strictNotEqualResult,
}
