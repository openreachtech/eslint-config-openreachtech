'use strict'

/**
 * Lint sample for jsdoc/imports-as-dependencies rule
 */
class ImportAsDependencies {
  /**
   * Constructor.
   */
  constructor () {
    this.alpha = 1
    this.beta = 'string'
    this.gamma = Symbol('gamma')
    this.delta = null
  }

  /**
   * Get babel instance.
   *
   * @returns {import('@babel/core').BabelFile | null} - Babel instance. // ✅ `jsdoc/imports-as-dependencies`
   */
  getBabelInstance () {
    return null
  }
}

module.exports = ImportAsDependencies
