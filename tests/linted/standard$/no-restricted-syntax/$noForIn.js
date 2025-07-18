'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function noForInFunc (array) {
  let total = 0 // eslint-disable-line no-restricted-syntax

  for (const index in array) { // ❌ { selector: 'ForInStatement' } of `no-restricted-syntax`
    total += array[index]
  }

  return total
}

export default {
  noForInFunc,
}
