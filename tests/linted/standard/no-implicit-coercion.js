'use strict'

/* eslint-disable jsdoc/require-jsdoc */

/** @type {*} */
const foo = '100'

const alpha = !!foo // ❌ boolean:true of `no-implicit-coercion`
const beta = ~foo.indexOf('.') // ❌ number:true of `no-implicit-coercion`
const gamma = +foo // ❌ number:true of `no-implicit-coercion`
const delta = 1 * foo // ❌ number:true of `no-implicit-coercion`

// eslint-disable-next-line prefer-template
const epsilon = '' + foo // ❌ string:true of `no-implicit-coercion`

function extraFunc () {
  /** @type {*} */
  let zeta = 1 // eslint-disable-line no-restricted-syntax
  zeta += '' // ❌ string:true of `no-implicit-coercion`

  /**
   * @type {{
   *   first: number,
   * }}
   */
  const eta = {
    first: 1,
  }
  zeta.first += '' // ❌ string:true of `no-implicit-coercion`

  const theta = `${foo}` // ❌ disallowTemplateShorthand:true of `no-implicit-coercion`

  return {
    zeta,
    eta,
    theta,
  }
}

module.exports = {
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  extraFunc,
}
