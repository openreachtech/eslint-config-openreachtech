/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable openreachtech/newline-per-parameter */

function alphaFunc (alpha, beta, gamma
) { // ✅ consistent of `function-paren-newline`
  return alpha + beta + gamma
}

function betaFunc (
  alpha, beta, gamma) { // ✅ consistent of `function-paren-newline`
  return alpha + beta + gamma
}

// --------------------------------------------------------------------------

function gammaFunc (alpha, beta, gamma) { // ✅ consistent of `function-paren-newline`
  return alpha + beta + gamma
}

function deltaFunc (
  alpha, beta, gamma
) { // ✅ consistent of `function-paren-newline`
  return alpha + beta + gamma
}

export default {
  alphaFunc,
  betaFunc,
  gammaFunc,
  deltaFunc,
}
