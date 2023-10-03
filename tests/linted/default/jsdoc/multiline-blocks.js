'use strict'

// ❌ noZeroLineText:true of `jsdoc/multiline-blocks`
/** Reported up here
 * because the rest is multiline
 */

/** @type {string} */ // ✅ singleLineTags:[lends, type, inheritdoc] of `jsdoc/multiline-blocks`
const alpha = 'alpha'

/** @lends AlphaLendsClass */ // ✅ singleLineTags:[lends, type, inheritdoc] of `jsdoc/multiline-blocks`

/**
 * Alpha class for @lends.
 */
class AlphaLendsClass extends Object {
  /** @inheritdoc */ // ✅ singleLineTags:[lends, type, inheritdoc] of `jsdoc/multiline-blocks`
  toString () {
    return this.toString()
  }
}

// ❌ noSingleLineBlocks:true of `jsdoc/multiline-blocks`
/** @returns {string} - Alpha value. */
function alphaFunc () {
  return 'alpha'
}

module.exports = {
  alpha,
  alphaFunc,
}
