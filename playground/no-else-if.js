// @ts-check
'use strict'

function noElseIf (condition) {
  if (condition == 1) {
    return 111
  // eslint-disable-next-line no-restricted-syntax
  } else if (condition == 2) {
    return 222
  } else {
    return 333
  }
}

module.exports = {
  noElseIf
}
