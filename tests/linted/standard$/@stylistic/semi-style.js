'use strict'

/* eslint-disable jsdoc/require-jsdoc */
/* eslint-disable no-restricted-syntax */
/* eslint-disable semi */

function alphaFunc () {
  return 'alpha'
}

function betaFunc () {
  return 'beta'
}

{
  alphaFunc(); // ❌ first of `semi-style`

  [1, 2, 3].forEach(it => {}) // ❌ first of `semi-style`
}

for (
  let index = 0
  ; index < 10 // ❌ first of `semi-style`
  ; index += 1 // ❌ first of `semi-style`
) {
  betaFunc()
}

class Gamma {
  static {
    alphaFunc(); // ❌ first of `semi-style`
    betaFunc()
  }

  static method () {
    alphaFunc()

    ; [1, 3, 5].forEach(it => { // ✅ first of `semi-style`
      betaFunc()
    })
  }
}

module.exports = {
  Gamma,
}
