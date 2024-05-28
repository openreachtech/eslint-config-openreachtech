'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function noWhileFunc (array) {
  let total = 0 // eslint-disable-line no-restricted-syntax
  let index = 0 // eslint-disable-line no-restricted-syntax

  while (index < array.length) { // ❌ { selector: 'WhileStatement' } of `no-restricted-syntax`
    total += array[index]

    index += 1
  }

  return total
}

module.exports = {
  noWhileFunc,
}
