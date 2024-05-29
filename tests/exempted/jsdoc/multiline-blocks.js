'use strict'

/** @type {string} */ // ✅ singleLineTags:[lends, type, inheritdoc, override] of `jsdoc/multiline-blocks`
const alpha = 'alpha'

/** @lends AlphaLendsClass */ // ✅ singleLineTags:[lends, type, inheritdoc, override] of `jsdoc/multiline-blocks`

/**
 * Alpha class for @lends.
 */
class AlphaLendsClass extends Object {
  /** @inheritdoc */ // ✅ singleLineTags:[lends, type, inheritdoc, override] of `jsdoc/multiline-blocks`
  toString () {
    return this.toString()
  }

  /** @override */ // ✅ singleLineTags:[lends, type, inheritdoc, override] of `jsdoc/multiline-blocks`
  valueOf () {
    return this.valueOf()
  }
}

module.exports = {
  alpha,
  AlphaLendsClass,
}
