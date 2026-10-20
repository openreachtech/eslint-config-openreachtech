/* eslint-disable jsdoc/require-jsdoc */

class NoSuffix {
  constructor () {
    this.array = []
  }

  getAlphaUtil () { // ❌ { selector: 'Identifier[name=/.+Util$/]' } of `no-restricted-syntax`
    return this.array
  }
}

export default NoSuffix
