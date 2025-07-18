'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function * alphaFunc () {
  yield* [1, 3, 5] // ❌ before:true of `yield-star-spacing`
  yield *[7, 9, 11] // ❌ after:true of `yield-star-spacing`
  yield*[13, 15, 17] // ❌ before:false,after:true of `yield-star-spacing`
}

function * betaFunc () {
  yield * [1, 3, 5] // ✅ before:true of `yield-star-spacing`
}

export default {
  alphaFunc,
  betaFunc,
}
