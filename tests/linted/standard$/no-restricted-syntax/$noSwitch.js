'use strict'

/* eslint-disable jsdoc/require-jsdoc */

function noSwitchFunc (condition) {
  switch (condition) { // ❌ { selector: 'SwitchStatement' } of `no-restricted-syntax`
    case 1:
      return 'one'
    case 2:
      return 'two'
    default:
      return 'unknown'
  }
}

export default {
  noSwitchFunc,
}
