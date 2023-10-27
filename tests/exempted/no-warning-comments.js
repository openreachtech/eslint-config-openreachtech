'use strict'

// TODO: must declaration gamma = 3 ✅ `no-warning-comments`
const alpha = 1
const bate = 2

// FIXME: There is a strange bug in this function ✅ `no-warning-comments`
/**
 * Gamma function.
 *
 * @returns {number} - Sum of alpha and bate.
 */
function gammaFunc () {
  return alpha + bate
}

// XXX: There is a critical bug in this function ✅ `no-warning-comments`
/**
 * Delta function.
 *
 * @returns {number} - 4
 */
function deltaFunc () {
  return 4
}

module.exports = {
  alpha,
  bate,
  gammaFunc,
  deltaFunc,
}
