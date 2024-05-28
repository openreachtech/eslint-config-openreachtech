'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function alphaFunc() { // ❌ named:always of `space-before-blocks`
  // noop
}

const betaFunc = function betaFunc() { // ❌ named:always of `space-before-blocks`
  // noop
}

const gammaFunc = function() { // ❌ anonymous:always of `space-before-blocks`
  // noop
}

class Delta {
  constructor() { // ❌ classes:always of `space-before-blocks`
    this.first = 1
  }
}

const epsilon = {
  bar() { // ❌ named:always of `space-before-blocks`
    // noop
  },
}

// eslint-disable-next-line require-await
const zetaFunc = async() => { // ❌ asyncArrow:always of `space-before-blocks`
  const result = 1

  return result
}

module.exports = {
  alphaFunc,
  betaFunc,
  gammaFunc,
  Delta,
  epsilon,
  zetaFunc,
}
