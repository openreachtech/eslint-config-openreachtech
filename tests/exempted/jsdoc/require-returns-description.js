/**
 * Lint sample for require-returns-description rule.
 */
class RequireReturnsDescription {
  /**
   * Constructor.
   *
   * @param {object} args
   */
  constructor (args) {
    this.args = args
  }

  // ✅ `jsdoc/require-returns-description`
  /**
   * @param {object} params
   * @returns {Array<object>}
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

// ✅ `jsdoc/require-returns-description`
/**
 * Alpha method.
 *
 * @param {object} first
 * @returns {object}
 */
function alphaMethod (first) {
  return {
    first,
  }
}

export default {
  RequireDescription: RequireReturnsDescription,
  alphaMethod,
}
