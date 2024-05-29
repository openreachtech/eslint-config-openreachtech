'use strict'

// eslint-disable-next-line @stylistic/semi-style
const MILLISECONDS_PER_ONE_DAY = 86400000; // ❌ `semi`

{
  const first = 1
  const second = 2 + first

  ;(function extraFunc (...args) { // ✅ `semi`
    // noop
  })(first, second)
}

module.exports = {
  MILLISECONDS_PER_ONE_DAY,
}
