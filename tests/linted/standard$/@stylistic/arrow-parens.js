'use strict'

/* eslint-disable jsdoc/require-jsdoc */

const alphaFunc = (it) => {} // ❌ as-needed of `arrow-parens`
const betaFunc = (it) => it // ❌ as-needed of `arrow-parens`
const gammaFunc = (it) => { // ❌ as-needed of `arrow-parens`
  '\n'
}

const deltaFunc = Promise.resolve()
  .then((it) => {}) // ❌ as-needed of `arrow-parens`
const epsilonFunc = Promise.resolve()
  .then((it) => it) // ❌ as-needed of `arrow-parens`

function zetaFunc (it) {
  return it
}

{
  zetaFunc((it) => { // ❌ as-needed of `arrow-parens`
    if (!it) {
      return null
    }

    return 999
  })
}

export default {
  alphaFunc,
  betaFunc,
  gammaFunc,
  deltaFunc,
  epsilonFunc,
  zetaFunc,
}
