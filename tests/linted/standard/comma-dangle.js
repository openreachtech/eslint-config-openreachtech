'use strict'

/* eslint-disable jsdoc/require-jsdoc */

// import {
//   alpha,
//   beta,
//   gamma // ❌ always-multiline `comma-dangle`
// } from './one-var.js'

// import { PaddedBlock } from './one-var.js' // ✅ always-multiline `comma-dangle`

const arrays = [
  100,
  200,
  300 // ❌ always-multiline `comma-dangle`
]

const objects = {
  alpha: 10,
  beta: 20,
  gamma: 30 // ❌ always-multiline `comma-dangle`
}

const oneLineArray = [1, 2, 3] // ✅ always-multiline `comma-dangle`
const oneLineObject = { arrays, objects } // ✅ always-multiline `comma-dangle`

function commaDangle (
  first,
  second, // ❌ always-multiline:functions `comma-dangle`
) {
  return [first, second] // ✅ always-multiline `comma-dangle`
}

module.exports = {
  oneLineArray,
  oneLineObject,
  commaDangle // ❌ always-multiline `comma-dangle`
}
