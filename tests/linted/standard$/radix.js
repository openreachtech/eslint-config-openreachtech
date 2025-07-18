'use strict'

const alpha = parseInt('071', 10) // ❌ as-needed of `radix`
// eslint-disable-next-line prefer-numeric-literals
const beta = parseInt('071', 8) // ✅ as-needed of `radix`
const gamma = parseInt('071') // ✅ as-needed of `radix`
const delta = parseInt('0xabc') // ✅  s-needed of `radix`
const epsilon = parseInt('0b100101') // ✅ as-needed of `radix`
const zeta = parseInt('0o123') // ✅ as-needed of `radix`

export default {
  alpha,
  beta,
  gamma,
  delta,
  epsilon,
  zeta,
}
