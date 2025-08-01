class Alpha {
  /**
   * Constructor of this class.
   *
   * @param {*} condition
   */
  constructor (condition) {
    this.value = condition // ❌️ { selector: 'MethodDefinition[kind=constructor] BlockStatement ConditionalExpression' } of `no-restricted-syntax`
      ? 100
      : 200
  }
}

export default {
  Alpha,
}
