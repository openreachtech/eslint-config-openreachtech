'use strict'

/* eslint-disable jsdoc/require-jsdoc */

class MatchDescription {
  // ✅ matchDescription of `match-description`
  /**
   * Constructor.
   */
  constructor () {
    this.alpha = 1
    this.beta = 'string'
  }

  /* eslint-disable jsdoc/require-description-complete-sentence */
  // ✅ matchDescription of `match-description` (does not start with capitalized letter)
  /**
   * get alpha value.
   *
   * @returns {number} - Alpha value.
   */
  firstMethod () {
    return this.alpha
  }
  /* eslint-enable jsdoc/require-description-complete-sentence */

  /* eslint-disable jsdoc/require-description-complete-sentence */
  // ✅ matchDescription of `match-description` (no period)
  /**
   * Get beta value
   *
   * @returns {string} - Beta value.
   */
  secondMethod () {
    return this.beta
  }
  /* eslint-enable jsdoc/require-description-complete-sentence */
}

module.exports = MatchDescription
