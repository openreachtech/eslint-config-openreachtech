const cancelledAt = new Date() // ❌️ { selector: 'Identifier[name=/cancelled/i]' } of `no-restricted-syntax`

class CancelledOrder { // ❌️ { selector: 'Identifier[name=/cancelled/i]' } of `no-restricted-syntax`
  /**
   * Constructor.
   */
  constructor () {
    this.first = []
  }
}

export default {
  cancelledAt,
  CancelledOrder,
}
