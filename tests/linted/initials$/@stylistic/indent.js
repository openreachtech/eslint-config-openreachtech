'use strict'

module.exports = function doubleValue (
  value,
  ignore
) {
  if (ignore) {
    return value
    } // ❌ `indent`

  return value + value
}
