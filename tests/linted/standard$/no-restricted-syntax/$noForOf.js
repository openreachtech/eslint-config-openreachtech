/* eslint-disable jsdoc/require-jsdoc */

function noForOfFunc (array) {
  let total = 0 // eslint-disable-line no-restricted-syntax

  for (const it of array) { // ❌ { selector: 'ForOfStatement' } of `no-restricted-syntax`
    total += it
  }

  return total
}

export default {
  noForOfFunc,
}
