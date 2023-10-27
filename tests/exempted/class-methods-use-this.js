'use strict'

/* eslint-disable jsdoc/require-jsdoc */

class ClassMethodUseThis {
  /**
   * Definition of property.
   */
  constructor () {
    this.alpha = 1
  }

  /**
   * Accessor of alpha.
   *
   * @returns {number} - Value.
   */
  getAlpha () { // ✅ `class-methods-use-this`
    return 999
  }
}

module.exports = ClassMethodUseThis
