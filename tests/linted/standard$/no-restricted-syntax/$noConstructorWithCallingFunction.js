class Alpha {
  /**
   * Constructor of this class.
   *
   * @param {*} object
   */
  constructor (object) {
    this.getInstanceValue() // ❌ { selector: 'MethodDefinition[kind=constructor] BlockStatement CallExpression:not([callee.type=Super])' } of `no-restricted-syntax`

    this.Ctor.getStaticValue() // ❌ { selector: 'MethodDefinition[kind=constructor] BlockStatement CallExpression:not([callee.type=Super])' } of `no-restricted-syntax`

    object.getValue(this) // ❌ { selector: 'MethodDefinition[kind=constructor] BlockStatement CallExpression:not([callee.type=Super])' } of `no-restricted-syntax`

    betaFunction(this) // ❌ { selector: 'MethodDefinition[kind=constructor] BlockStatement CallExpression:not([callee.type=Super])' } of `no-restricted-syntax`
  }

  /**
   * Get static value.
   *
   * @returns {number} Static value
   */
  static getStaticValue () {
    return 0
  }

  /**
   * get: Constructor.
   *
   * @returns {typeof Alpha} The constructor of this class
   */
  get Ctor () {
    return /** @type {typeof Alpha} */ (this.constructor)
  }

  /**
   * Get instance value.
   *
   * @returns {number} Instance value
   */
  getInstanceValue () {
    return 999
  }
}

/**
 * Beta function.
 *
 * @param {*} instance - The instance of Alpha.
 */
function betaFunction (instance) {
  instance.setup()
}

export default {
  Alpha,
}
