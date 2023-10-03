'use strict'

/* eslint-disable func-names */
/* eslint-disable jsdoc/require-jsdoc */

const alpha = function () { // ❌ inside of `wrap-iife`
  return 1
}()

const beta = (function () { // ❌ inside of `wrap-iife`
  return 2
}())

const gamma = (function () { // ✅ inside of `wrap-iife`
  return 3
})()

function extraFunc () {
  // noop
}

const targetThis = {}

const zeta = function () { // ❌ inside of `wrap-iife`
  extraFunc()
}
  .call(targetThis)

const eta = (function () { // ❌ inside of `wrap-iife`
  extraFunc()
}
  .call(targetThis))

module.exports = {
  alpha,
  beta,
  gamma,
  zeta,
  eta,
}
