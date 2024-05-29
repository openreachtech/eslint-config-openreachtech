'use strict'

class TextEscaping {
  /**
   * This description has <div>HTML</div> and `markdown` text. // ✅ exempted `jsdoc/text-escaping`
   *
   * @param {{
   *   first: number,
   *   second: string,
   * }} params - Required params to create response.
   * @returns {Array<{
   *   first: number,
   *   second: string,
   * }>} - Array that includes params.
   */
  static method (params) {
    return [
      params,
    ]
  }
}

module.exports = TextEscaping
