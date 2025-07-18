'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function* alphaFunc () { // ❌ before:true of `generator-star-spacing`
  yield 'first'
  yield 'second'
}

function *betaFunc () { // ❌ after:true of `generator-star-spacing`
  yield '1st'
  yield '2nd'
}

function*gammaFunc () { // ❌ before:true,after:true of `generator-star-spacing`
  yield 'one'
  yield 'two'
}

function * deltaFunc () { // ✅ before:false,after:false of `generator-star-spacing`
  yield 'three'
  yield 'four'
}

export default {
  alphaFunc,
  betaFunc,
  gammaFunc,
  deltaFunc,
}
