/* eslint-disable @stylistic/quotes */

const cancelledAt = new Date() // ❌️ `openreachtech/prefer-american-spell`

class CancelledOrder { // ❌️ `openreachtech/prefer-american-spell`
  /**
   * Constructor.
   */
  constructor () {
    this.first = []

    this.cancelledEntity = null // ❌️ `openreachtech/prefer-american-spell`
  }
}

const literals = [
  'cancelled', // ❌️ `openreachtech/prefer-american-spell`
  "cancelled", // ❌️ `openreachtech/prefer-american-spell`
]

const templateLiterals = [
  `cancelled ${999}`, // ❌️ `openreachtech/prefer-american-spell`
]

export default {
  definitions: [
    cancelledAt, // ❌️ `openreachtech/prefer-american-spell`
    CancelledOrder, // ❌️ `openreachtech/prefer-american-spell`
  ],

  literals,
  templateLiterals,
}

/**
 * NOTE: `{ cancelledAt }` means `{cancelledAt: cancelledAt }`, thus it throws two same lint errors.
 */
