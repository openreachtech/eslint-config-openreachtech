'use strict'

/* eslint-disable @stylistic/brace-style */
/* eslint-disable curly */
/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable @stylistic/max-statements-per-line */
/* eslint-disable no-else-return */

function bodyFunc ({
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
}) {
  if (alpha) return null // ❌ `openreachtech/no-if-in-oneline`

  if (beta) { /* noop */ } // ❌ `openreachtech/no-if-in-oneline`

  if (
    gamma
  ) return null // ❌ `openreachtech/no-if-in-oneline`

  if (delta) { return null } // ❌ `openreachtech/no-if-in-oneline`

  if (epsilon) return alpha // ❌ `openreachtech/no-if-in-oneline`
  else return beta
}

export default {
  bodyFunc,
}
