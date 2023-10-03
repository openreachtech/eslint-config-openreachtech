'use strict'

// ✅ exempted of `jsdoc/require-example`
/**
 * There is no lint of `jsdoc/check-example`.
 *
 * @param {number} first - The first parameter as id.
 * @param {string} second - The second parameter as name.
 * @returns {{
 *   first: number,
 *   second: string,
 * }} - Composed object.
 */
function alphaFunc (
  first,
  second
) {
  return {
    first,
    second,
  }
}

module.exports = {
  alphaFunc,
}
