'use strict'

/**
 * Lint sample for require-param-description rule.
 */
class RequireParamDescription {
  // ✅ `jsdoc/require-param-description`
  /**
   * Constructor.
   *
   * @param {object} args
   */
  constructor (args) {
    this.args = args
  }

  // ✅ `jsdoc/require-param-description`
  /**
   * @param {object} params
   * @returns {*} - Any.
   */
  method (params) {
    const extended = {
      ...params,
      args: this.args,
    }

    return [
      extended,
    ]
  }
}

// ✅ `jsdoc/require-param-description`
/**
 * Alpha method.
 *
 * @param {object} first
 * @returns {object} - Generated object.
 */
function alphaMethod (first) {
  return {
    first,
  }
}

module.exports = {
  RequireParamDescription,
  alphaMethod,
}
