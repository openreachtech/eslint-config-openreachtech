/**
 * Lint sample for id-length rule.
 */
class IdLength {
  /**
   * Getter: handling.
   *
   * @returns {object} - An object.
   */
  get $ () { // ✅ `id-length`
    return {}
  }

  /**
   * Alpha method.
   *
   * @param {Array} array - Array of number.
   * @returns {object} - An object.
   */
  alphaMethod (array) {
    return array.map(
      (
        _, // ✅ `id-length`
        index
      ) => index
    )
  }
}

export default IdLength
