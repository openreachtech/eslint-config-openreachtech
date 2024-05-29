'use strict'

/* eslint-disable jsdoc/require-jsdoc */

class RequireDescriptionCompleteSentence {
  /**
   * Constructor.
   */
  constructor () {
    this.alpha = 1
    this.beta = 'string'
    this.gamma = Symbol('gamma')
    this.delta = null
  }

  /* eslint-disable jsdoc/match-description */
  // ✅ jsdoc/require-description-complete-sentence (description: Sentences should start with an uppercase character)
  /**
   * get alpha value.
   *
   * @returns {number} - Alpha value.
   */
  firstMethod () {
    return this.alpha
  }
  /* eslint-enable jsdoc/match-description */

  /* eslint-disable jsdoc/match-description */
  // ✅ jsdoc/require-description-complete-sentence (description: Sentences must end with a period)
  /**
   * Get beta value
   *
   * @returns {string} - Beta value.
   */
  secondMethod () {
    return this.beta
  }
  /* eslint-enable jsdoc/match-description */

  // ✅ jsdoc/require-description-complete-sentence (@returns: Sentences should start with an uppercase character)
  /**
   * Get gamma value.
   *
   * @returns {symbol} - gamma value.
   */
  thirdMethod () {
    return this.gamma
  }

  // ✅ jsdoc/require-description-complete-sentence (@returns: Sentences must end with a period)
  /**
   * Get delta value.
   *
   * @returns {null} - Delta value
   */
  fourthMethod () {
    return this.delta
  }
}

module.exports = RequireDescriptionCompleteSentence
