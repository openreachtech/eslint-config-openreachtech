'use strict'

/* eslint-disable jsdoc/require-jsdoc */

/* eslint-disable-next-line openreachtech/newline-per-parameter */
function functionCallArgumentNewline (first, second, third) {
  return first + second + third
}

const alpha = functionCallArgumentNewline(100, 200, // ❌ consistent of `function-call-argument-newline`
  300)

const beta = functionCallArgumentNewline(
  100,
  200, 300 // ❌ consistent of `function-call-argument-newline`
)

// --------------------------------------------------------------------------

const gamma = functionCallArgumentNewline(100, 200, 300) // ✅ consistent of `function-call-argument-newline`

const delta = functionCallArgumentNewline( // ✅ consistent of `function-call-argument-newline`
  100, 200, 300
)

const epsilon = functionCallArgumentNewline( // ✅ consistent of `function-call-argument-newline`
  100,
  200,
  300
)

module.exports = {
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
}
