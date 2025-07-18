'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function noTernaryFunc (value) {
  return value === 1 // ✅ `no-ternary`
    ? 'one'
    : 'not one'
}

export default {
  noTernaryFunc,
}
