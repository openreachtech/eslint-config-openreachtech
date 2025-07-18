'use strict'

/* eslint-disable jsdoc/require-jsdoc */

/*
 * Two parameters in one line.
 */

function alphaFunc (first, second) { // ❌ `openreachtech/newline-per-parameter`
  return first + second
}

/*
 * Array parameter pattern.
 */

function betaFunc ([first, second]) { // ❌ `openreachtech/newline-per-parameter`
  return first + second
}

/*
 * Object parameter pattern.
 */

function gammaFunc ({ first, second }) { // ❌ `openreachtech/newline-per-parameter`
  return first + second
}

function deltaFunc ({
  first,
  second: { third, fourth }, // ❌ `openreachtech/newline-per-parameter`
}) {
  return first
    + third
    + fourth
}

export default {
  alphaFunc,
  betaFunc,
  gammaFunc,
  deltaFunc,
}
