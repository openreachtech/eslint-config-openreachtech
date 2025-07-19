/**
 * Lint sample for id-length rule.
 */
class IdLength {
  /**
   * A method.
   *
   * @param {number} first - A number.
   * @returns {number} - Single A.
   */
  a (first) { // ❌ `id-length`
    return first + first
  }

  /**
   * X method.
   *
   * @param {number} x - A number.
   * @returns {number} - Single A.
   */
  power (x) { // ❌ `id-length`
    return x * x
  }

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
