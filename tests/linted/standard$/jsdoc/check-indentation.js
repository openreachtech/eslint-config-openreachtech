class CheckIndentation {
  /**
   * There is no lint of `jsdoc/check-indentation` for param and returns tags.
   * ✅ There might be an indentation.
   * ✅ There might be an indentation.
   *
   * @param {{
   *   first: number,
   *   second: string,
   * }} params - Required params to create response.
   * @returns {Array<{
   *   first: number,
   *   second: string,
   * }>} - The alpha structure.
   */
  static alphaMethod ({
    first,
    second,
  }) {
    /**
     * There is no lint of `jsdoc/check-indentation` for type tag.
     * ✅ There might be an indentation.
     *
     * @type {{
     *   first: number,
     *   second: string,
     * }} - Indentation.
     */
    const alpha = {
      first,
      second,
    }

    return [
      alpha,
    ]
  }

  /**
   * There is no lint of `jsdoc/check-indentation` for yield tag.
   * ✅ There might be an indentation.
   *
   * @yields {{
   *   first: number,
   *   second: number,
   * }} - The beta structure.
   */
  static * betaMethod () {
    yield {
      first: 1,
      second: 2,
    }
  }

  /**
   * Gamma method
   *   ❌ there must be no indentation.
   *
   * @returns {number} - The gamma structure.
   */
  static gammaMethod () {
    return 3
  }
}

export default CheckIndentation

/**
 * There is no lint of `jsdoc/check-indentation` for typedef tag.
 * ✅ There might be an indentation.
 *
 * @typedef {{
 *   first: number,
 *   second: number,
 * }} Beta - The beta structure.
 */
