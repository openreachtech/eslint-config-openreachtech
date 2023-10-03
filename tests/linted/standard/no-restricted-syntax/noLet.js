'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function noLetFunc (condition) {
  let total = 0 // ❌ { selector: 'VariableDeclaration[kind=let]' } of `no-restricted-syntax`

  if (condition) {
    total += 1
  }

  return total
}

module.exports = {
  noLetFunc,
}
