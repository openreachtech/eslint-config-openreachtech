'use strict'

/* eslint-disable one-var */

const gamma = 3,
  alpha = 1, // ✅ exempted `sort-vars`
  beta = 2 // ✅ exempted `sort-vars`

export default {
  alpha,
  beta,
  gamma,
}
