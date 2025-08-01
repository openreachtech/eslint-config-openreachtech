/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-expressions */

/**
 * Alpha class.
 */
class AlphaClass { // ❌ { selector: 'xxx' } of `no-restricted-syntax`
  /**
   * Constructor of this class.
   */
  constructor () {
    this.callFirst
  }

  /**
   * Call first method.
   *
   * @returns {*}
   */
  get callFirst () {
    return null
  }
}

/**
 * Beta class.
 */
class BetaClass { // ❌ { selector: 'xxx' } of `no-restricted-syntax`
  /**
   * Do first.
   */
  static doFirst () {
    // Do something
  }

  /**
   * Do second.
   */
  static doSecond () {
    // Do something else
  }
}

export default {
  AlphaClass,
  BetaClass,
}
