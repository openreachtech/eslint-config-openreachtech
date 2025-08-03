/* eslint-disable @stylistic/quotes */

const analysedAt = new Date() // ❌️ `openreachtech/prefer-american-spell`

class AnalysedChecker { // ❌️ `openreachtech/prefer-american-spell`
  /**
   * Constructor.
   */
  constructor () {
    this.first = []

    this.analysedEntity = null // ❌️ `openreachtech/prefer-american-spell`
  }
}

const literals = [
  'analysed', // ❌️ `openreachtech/prefer-american-spell`
  "analysed", // ❌️ `openreachtech/prefer-american-spell`
]

const templateLiterals = [
  `analysed ${999}`, // ❌️ `openreachtech/prefer-american-spell`
]

export default {
  definitions: [
    analysedAt, // ❌️ `openreachtech/prefer-american-spell`
    AnalysedChecker, // ❌️ `openreachtech/prefer-american-spell`
  ],

  literals,
  templateLiterals,
}

/**
 * NOTE: `{ cancelledAt }` means `{cancelledAt: cancelledAt }`, thus it throws two same lint errors.
 */
