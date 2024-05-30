'use strict'

const array = []
const object = {}

const alpha = array[0] // ❌ { array: ture } of prefer-destructuring

const beta = object.beta // ❌ { object: true } of prefer-destructuring
const gamma = object['gamma'] // ❌ { object: true } of prefer-destructuring

const delta = object.epsilon // ✅ { object: true }, { enforceForRenamedProperties: false } of prefer-destructuring

module.exports = {
  alpha,
  beta,
  gamma,
  delta,
}
