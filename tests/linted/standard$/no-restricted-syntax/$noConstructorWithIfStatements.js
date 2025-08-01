class Alpha {
  /**
   * Constructor of this class.
   *
   * @param {*} condition
   */
  constructor (condition) {
    if (condition) { // ❌ { selector: 'MethodDefinition[kind=constructor] BlockStatement IfStatement' } of `no-restricted-syntax`
      this.value = 'value'
    }
  }
}

export default {
  Alpha,
}
