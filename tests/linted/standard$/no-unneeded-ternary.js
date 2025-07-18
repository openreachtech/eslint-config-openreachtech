'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function alphaFunc (target) {
  return target === 2 // ❌ `no-unneeded-ternary`
    ? true
    : false
}

function betaFunc (target) {
  return target // ❌ `no-unneeded-ternary`
    ? true
    : false
}

function extraFunc () {
  const target = alphaFunc(3)

  const gamma = target // ❌ defaultAssignment:false of `no-unneeded-ternary`
    ? target
    : 1

  betaFunc(
    target // ❌ defaultAssignment:false of `no-unneeded-ternary`
      ? target
      : 1
  )

  return gamma
}

export default {
  alphaFunc,
  betaFunc,
  extraFunc,
}
