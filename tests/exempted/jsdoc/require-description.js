'use strict'

/* eslint-disable jsdoc/no-blank-blocks */

class RequireDescription {
  /**
   */ // ✅ `jsdoc/require-description`
  constructor () {
    this.third = true
  }

  /**
   * @param {object} params - Expanding params.
   * @returns {*} - Any.
   */ // ✅ `jsdoc/require-description`
  method (params) {
    const extended = {
      ...params,
      third: this.third,
    }

    return [
      extended,
    ]
  }
}

/**
 */ // ✅ `jsdoc/require-description`
function alphaMethod () {
  // noop
}

module.exports = {
  RequireDescription,
  alphaMethod,
}
