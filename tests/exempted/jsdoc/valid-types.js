/**
 * AlphaClass is a class that does nothing.
 */
export default class AlphaClass {
  /**
   * Constructor for AlphaClass.
   *
   * @param {AlphaClassParams} params - Parameters for the class.
   */
  constructor ({
    first,
    second,
  }) {
    this.first = first
    this.second = second
  }

  /**
   * Factory method of this class.
   * ✅️ exempted from `valid-types` rule
   *
   * @template {X extends typeof AlphaClass ? X : never} T, X
   * @param {AlphaClassFactoryParams} params - Parameters for the class.
   * @returns {InstanceType<T>} An instance of AlphaClass.
   * @this {T}
   */
  static create ({
    first,
    second,
  }) {
    return /** @type {InstanceType<T>} */ (
      new this({
        first,
        second,
      })
    )
  }
}

/**
 * @typedef {{
 *   first: number
 *   second: string
 * }} AlphaClassParams
 */

/**
 * @typedef {AlphaClassParams} AlphaClassFactoryParams
 */
