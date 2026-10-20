/* eslint-disable max-classes-per-file */
/* eslint-disable jsdoc/require-jsdoc */

class AlphaUtil { // ❌ { selector: 'Identifier[name=/.+Util$/]' } of `no-restricted-syntax`
  constructor () {
    this.array = []
  }
}

class BetaUtils { // ❌ { selector: 'Identifier[name=/.+Utils$/]' } of `no-restricted-syntax`
  constructor () {
    this.array = []
  }
}

export default {
  AlphaUtil,
  BetaUtils,
}
