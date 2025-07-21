/* eslint-disable max-classes-per-file */

/** @type {string} */ // ✅ singleLineTags:[lends, type, extends, inheritdoc, override] of `jsdoc/multiline-blocks`
const alpha = 'alpha'

/** @lends AlphaLendsClass */ // ✅ singleLineTags:[lends, type, extends, inheritdoc, override] of `jsdoc/multiline-blocks`

/**
 * Alpha class for @lends.
 */
class AlphaLendsClass extends Object {
  /** @inheritdoc */ // ✅ singleLineTags:[lends, type, extends, inheritdoc, override] of `jsdoc/multiline-blocks`
  toString () {
    return this.toString()
  }

  /** @override */ // ✅ singleLineTags:[lends, type, extends, inheritdoc, override] of `jsdoc/multiline-blocks`
  valueOf () {
    return this.valueOf()
  }
}

/** @extends {Array} */ // ✅ singleLineTags:[lends, type, extends, inheritdoc, override] of `jsdoc/multiline-blocks`
class ExtraClass extends Array {
  // noop
}

export default {
  alpha,
  AlphaLendsClass,
  ExtraClass,
}
