'use strict'

const alpha = 1
const beta = 2

/**
 * @type {{
 *   first: number,
 * }}
 */
const gamma = {
  first: 0,
}

gamma.first = ~alpha // ✅ exempted of `no-bitwise`

gamma.first = alpha | beta // ✅ exempted of `no-bitwise`
gamma.first = alpha & beta // ✅ exempted of `no-bitwise`
gamma.first = alpha ^ beta // ✅ exempted of `no-bitwise`
gamma.first = alpha << beta // ✅ exempted of `no-bitwise`
gamma.first = alpha >> beta // ✅ exempted of `no-bitwise`
gamma.first = alpha >>> beta // ✅ exempted of `no-bitwise`

gamma.first |= alpha // ✅ exempted of `no-bitwise`
gamma.first &= alpha // ✅ exempted of `no-bitwise`
gamma.first ^= alpha // ✅ exempted of `no-bitwise`
gamma.first <<= alpha // ✅ exempted of `no-bitwise`
gamma.first >>= alpha // ✅ exempted of `no-bitwise`
gamma.first >>>= alpha // ✅ exempted of `no-bitwise`
