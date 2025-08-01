/* eslint-disable no-restricted-syntax */

/**
 * Lint sample for require-await rule.
 */
class RequireAwait {
  /**
   * Alpha method.
   *
   * @returns {Promise<string>} - Alpha string.
   */
  async alphaMethod () { // ✅ `require-await`
    return 'alpha'
  }
}

export default RequireAwait
