'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function noDoWhileFunc () {
  // eslint-disable-next-line no-restricted-syntax
  let index = 0

  do { // ❌ { selector: 'DoWhileStatement' } of `no-restricted-syntax`
    index += 1
  } while (index < 10)

  return index
}

module.exports = {
  noDoWhileFunc,
}
