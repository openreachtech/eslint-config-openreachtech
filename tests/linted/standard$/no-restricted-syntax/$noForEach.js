'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function noForEachFunc (array) {
  const result = []

  array.forEach(it => { // ❌ { selector: 'CallExpression[callee.property.name=forEach]' } of `no-restricted-syntax`
    result.push(it)
  })

  return result
}

export default {
  noForEachFunc,
}
